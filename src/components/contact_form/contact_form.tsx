'use client'
import React, { useState, FormEvent, useEffect, useRef, ChangeEvent } from 'react'
import styles from './contact_form.module.css'
import SvgBtn from '../svg_btns/svg_btns'
import { AnimatePresence, easeOut, motion } from 'motion/react'
import { useModal } from '../modals/modal_context'
import useDebounce from '@/hooks/useDebounce'

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
    errors?: string[];
    checked?: boolean;
}

const ContactForm = () => {    
    const {modalName, setModalName} = useModal();
    const [message, setMessage] = useState<string>('');
    const [state, setState] = useState<'init'|'ready'|'sent'>('init');
    const [userData, setUserData] = useState<Record<string, FormInput>>({ 'name': {}, 'email': {isEmail: true}, 'message': {} });

    // This will check userData every sec for a completed form and set the state accordingly
    const checkData = ()=>{
        setState( s => {
            const vals = Object.values(userData)
            const checked = vals.filter( obj => obj.checked );
            switch (s){
                case 'init':
                case 'ready':
                    if (checked.length == vals.length){
                        return 'ready'
                    }else{
                        return 'init'
                    }
                    case 'sent':                    
                    break;
                }
                return s
        });        
    }; 
    useEffect( useDebounce( 1000, checkData ), [userData]);

    const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const isEmail = e.currentTarget.type == 'email'
        setUserData( oldData => ({ ...oldData,
            [name]:{ ...oldData[name],
                value: value,
                errors: undefined,
                checked: (value.length > 0 && validate(value, isEmail).length == 0)
            }
        }) );
        // message check
        if (message.length > 0){
            setMessage(``);
        }
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
                        checked: false,
                        errors: errs
                    }
                }));
            }
        }
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        // This should not happen anyway but
        const has_errors = validate(formData.get('name')?.toString() || '')
                .concat(validate(formData.get('email')?.toString() || '', true))
                .concat(validate(formData.get('message')?.toString() || ''))
                .length > 0;
        if (has_errors || state !== 'ready'){
            setMessage(`Please fix errors to proceed.`);
            return;
        }
        // Make Request
        setMessage(`Sending...`);      
        try{
            const data = {success: true, message: "theMessage"};
            
            /* formData.append("access_key", process.env.NEXT_PUBLIC_CONTACT_FORM_KEY || "");    
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });    
            const data = await response.json();  */     
            if (data.success) {
                setMessage("Message Success!");
                setState('sent');                
                /* (event.target as HTMLFormElement).reset(); */
            } else {
                console.error("Error", data);
                setMessage(data.message);
            }
        }catch(E){
            console.error(`Fetch Error:\n${E}`)
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
                    <div className={`flex ${styles.top_strip}`}>
                        <SvgBtn 
                            type={'x'} 
                            className={styles.dismiss} 
                            color={'#fff'}
                            onClick={()=>setModalName(null)}
                        />  
                    </div>
                        <div className={styles.image_container}>
                            <img                        
                                fetchPriority="high"
                                alt='vector self portrait'                                
                                src='static/images/portrait_02.svg'                                
                            />
                        </div>

                        <div className={`${styles.container_inner}`}>                  
                        <div className={`flex flex-column`} style={{ gap: '0.5rem', marginBottom: '2rem'}}>
                            <h1 className={`t-ac t-it t-jumbo-md`}>HIRE ME</h1>
                            <hr/>
                            <p style={{ lineHeight: '1.2rem' }}>Send me a quick message, I will get back to you as soon as I can.</p>
                        </div>
                        <motion.form layout className={`${styles.form}`} onSubmit={onSubmit} noValidate>
                            <fieldset 
                                disabled={ state === 'sent' } 
                                className={`flex flex-column`} 
                                style={{ border: 'none'}}
                            >                                     
                                <FormInput 
                                    name={'name'}
                                    data={userData['name']} 
                                    onChange={onChange} onBlur={onBlur}/>
                                
                                <FormInput 
                                    name={'email'} 
                                    type={'email'} 
                                    data={userData['email']}
                                    onChange={onChange} onBlur={onBlur}/>

                                <FormInput 
                                    name={'message'} 
                                    type={'textarea'} 
                                    data={userData['message']} 
                                    onChange={onChange} onBlur={onBlur}/>
                                
                                <h3>{message}</h3>

                                <div className={`flex flex-align-center`} style={{ justifyContent: 'flex-end' }}>
                                    { Object.entries(userData).map(([key, value], i) => (
                                        <FormBubble key={key} index={i} data={value}/>
                                    )) }
                                    <motion.button
                                        disabled={state !== 'ready'}
                                        className={`button active`}
                                        style={{ opacity: state==='ready' ? 1 : 0.25 }}
                                        type="submit"
                                    >
                                        { state !== 'sent' 
                                            ? 'Send Message'
                                            : 'Sent'}
                                    </motion.button>
                                </div>                         
                            </fieldset>
                        </motion.form>
                    </div>
                                                        
                </motion.div> 
            )}  
        </AnimatePresence> 
    )
}

const FormBubble = ({ index, data }:{
    index: number,
    data:FormInput
}) =>{
    const [url, setUrl] = useState('/static/images/form/bubble_hollow.svg');

    useEffect(()=>{
        if (data.errors?.length){
            setUrl('/static/images/form/bubble_error.svg');
        }else{
            if (data.value && data.value.length > 2){
                if (data.checked){
                    setUrl('/static/images/form/bubble_check.svg');
                }else{
                    setUrl('/static/images/form/bubble_filled.svg');
                }
            }else{
                setUrl('/static/images/form/bubble_hollow.svg');
            }
        }
    }, [data]);

    return (        
        <motion.img
            key={`icon-${index}-${url}`}
            className={styles.bubble}
            src={url}
            alt={''}
            initial={{ scale: 2.1 }}
            animate={{  scale: 1 }}
            exit={{  scale: 2.1 }}
            transition={{ duration: 0.5, ease: easeOut }}
        ></motion.img>        
    )
}

export const FormInput = ({ name, type='input', data, onChange, onBlur }:{ 
    name:string, 
    data: FormInput,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    type?:'input'|'textarea'|'email'    
}) => {
    const DynamicInput = type !== 'textarea' ? 'input' : 'textarea';
    const [classname, setClassname] = useState('');

    const checkState = useDebounce( 300, ()=>{
        setClassname( n => {
            if (data.checked){
                return styles.checked
            }else if ( data.errors && data.errors.length > 0){
                return styles.errored
            }
            return ''
        })    
    })
    useEffect( checkState, [data]);

    return (
        <div className={classname}>
            <label htmlFor={`input-${name}`}>{name}:</label>
            <DynamicInput                        
                id={`input-${name}`} 
                type={type == 'email' ? 'email' : 'text'}
                name={name}
                spellCheck={"false"}
                style={{ borderColor: data?.errors?.length
                    ? 'var(--accentB, red)' 
                    : 'var(--midground)' 
                }}
                placeholder={`/${name}*`}
                value={data?.value || ''}
                onChange={onChange}            
                onBlur={onBlur}                   
            ></DynamicInput>
            <AnimatePresence>
                { data?.errors && (data.errors.map(
                    (err, i)=>( <motion.p 
                        key={`${name}-error-${i}`} 
                        className={styles.error}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1,  y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: i * 0.2}}
                    >{err}</motion.p> )
                ))}
            </AnimatePresence>
        </div>
    )    
}

export default ContactForm