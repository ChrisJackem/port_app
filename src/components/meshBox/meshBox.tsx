import { Canvas } from '@react-three/fiber'
import React, { useRef, useEffect, useContext, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useFrame } from '@react-three/fiber';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import { THEMES } from '@/app/config/theme';
import styles from './meshBox.module.css'


const BoxMesh = () => {
    const meshRef = useRef<any>(null);
    const {theme} = useContext(ThemeContext);
    
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <mesh ref={meshRef} scale={8.5}>
            <boxGeometry/>
            <meshBasicMaterial color={THEMES[theme]['text']} wireframe={true} />
        </mesh>
    );
};

const MeshBox = () => {
    const { ref: container_ref, inView: isInView } = useInView();
    const {theme} = useContext(ThemeContext);
    
    useEffect(() => {
        console.log(isInView)
    }, [isInView]);

    return (
        <div ref={container_ref} className={`${styles.container}`}>            
            <Canvas               
                className={`${styles.canvas}`}
                style={{ width: '100%', height: '100%' }}
            >
                { isInView && <>                    
                    <ambientLight intensity={Math.PI / 1.6} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0.8} intensity={Math.PI * 100 } />
                    <pointLight position={[-10, -10, -10]} decay={0.4} intensity={Math.PI / 1.7 } />
                    <BoxMesh />
                </> }
            </Canvas>
        </div>       
    )
}

export default MeshBox