'use client'
import React, { useState, FormEvent, useEffect, useRef, ChangeEvent } from 'react'
import styles from './contact_form.module.css'
import SvgBtn from '../svg_btns/svg_btns'
import { AnimatePresence, easeOut, motion } from 'motion/react'
import { useModal } from '../modals/modal_context'

const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validate = ( text:string, isEmail:boolean=false )=>{
    const ret:string[] = []
    if ( text.length === 0 ){
        ret.push(`nothing entered.`);
    }else{
        if (text.length < 5) ret.push(`length too short.`);
        if (isEmail && !email_regex.test(text)) ret.push(`this is not a valid email.`);
    }
    return ret
}

type FormInput = { 
    value?: string;
    isEmail?:boolean;
    errors?: string[] 
}

const ContactForm = () => {
    const {modalName, setModalName} = useModal();
    const [message, setMessage] = useState<string>('');    
    //const [errors, setErrors] = useState<Map<string, string[]>>(new Map());

    const [userData, setUserData] = useState<Record<string, FormInput>>({});

    const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const isEmail = e.currentTarget.type == 'email'
        setUserData( oldData => ({ ...oldData,
            [name]:{ 
                value: value,
                isEmail: isEmail
            }
        }) );
    }
    const onBlur = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
        const name = e.currentTarget.name;
        if (userData.hasOwnProperty(name)){
            const val = userData[name]?.value ?? '';
            const is_email = userData[name]?.isEmail ? true : false;
            const errs = validate(val, is_email);
            if (errs.length > 0){
                setUserData( oldData => ({ ...oldData,
                    [name]:{ 
                        ...oldData[name],
                        errors: errs
                    }
                }));
            }
        }
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const nameErrors:string[] = validate(formData.get('name')?.toString() || '');
        const emailErrors:string[] = validate(formData.get('email')?.toString() || '', true);
        const messageErrors:string[] = validate(formData.get('message')?.toString() || '');

        // Count errors 
        const newErrors = new Map();
        if (nameErrors.length) {newErrors.set('name', nameErrors); }
        if (emailErrors.length) {newErrors.set('email', emailErrors);}
        if (messageErrors.length) {newErrors.set('message', messageErrors);}

        // Update state
        const hadErrors = newErrors.size > 0;
        setMessage(hadErrors ? `Fix errors to proceed.`: `Sending...`);
        //setErrors(newErrors);
        
        // If we are good, then fire request
        if (!hadErrors && false){
            try{
                formData.append("access_key", process.env.NEXT_PUBLIC_CONTACT_FORM_KEY || "");    
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });    
                const data = await response.json();      
                if (data.success) {
                    setMessage("Message Success.");                    
                    (event.target as HTMLFormElement).reset();
                } else {
                    console.error("Error", data);
                    setMessage(data.message);
                }
            }catch(E){
                console.error(`Fetch Error:\n${E}`)
            }
        }
    };

    return ( 
        <AnimatePresence>
            { modalName == 'contact' && (
                <motion.div 
                    key={'contact'} 
                    className={`modal ${styles.container}`}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                >
                    <img
                        style={{ marginLeft: 'auto'}}
                        fetchPriority="high"
                        alt='vector self portrait'
                        width='200px'
                        height='220px'
                        src='static/images/portrait_02.svg'
                    />
                    
                    <div className={`flex flex-column`} style={{ justifyContent: 'flex-end' }}>                    
                        <h1>Hire Me</h1>
                        <p>Send me a quick message and I will get back to you as soon as I can.</p>

                        {/* <p>{JSON.stringify(userData)}</p> */}

                        <motion.form className={`flex flex-column ${styles.form}`} onSubmit={onSubmit} noValidate>
                            <FormInput name={'name'} type={'input'} data={userData} onChange={onChange} onBlur={onBlur}/>
                            <FormInput name={'email'} type={'email'} data={userData} onChange={onChange} onBlur={onBlur}/>
                            <FormInput name={'message'} type={'textarea'} data={userData} onChange={onChange} onBlur={onBlur}/>
                            <p className={styles.message}>{message}</p>                            
                            <button className={`button active`} type="submit">Send Message</button>
                        </motion.form>
                    </div>

                    <SvgBtn 
                        type={'x'} 
                        className={styles.dismiss} 
                        color={'#fff'}
                        onClick={()=> setModalName(null) }
                    />
                </motion.div> 
            )}  
        </AnimatePresence> 
    )
}

export const FormInput = ({ name, type='input', data, errors=undefined, onChange, onBlur }:{ 
    name:string, 
    data: Record<string, FormInput>,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    type?:'input'|'textarea'|'email',
    errors?:string[] | undefined,
}) => {
    const DynamicInput = type !== 'textarea' ? 'input' : 'textarea';
    
    return (
        <div>
            <label htmlFor={`input-${name}`}>{name}:</label>
            <DynamicInput                        
                id={`input-${name}`} 
                type={type == 'email' ? 'email' : 'text'}
                name={name}
                spellCheck={"false"}
                style={{ borderColor: errors?.length
                    ? 'var(--accentB, red)' 
                    : 'var(--midground)' 
                }}
                value={data[name]?.value || ''}
                onChange={onChange}            
                onBlur={onBlur}            
            ></DynamicInput>
                { data[name]?.errors && (data[name].errors.map(
                    (err, i)=>( <p key={`${name}-error-${i}`} className={styles.error}>{err}</p> )
                ))}
        </div>
    )    
}

export default ContactForm