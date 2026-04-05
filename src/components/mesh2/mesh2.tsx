import { Canvas } from '@react-three/fiber'
import React, { useRef, useEffect, useContext, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useFrame } from '@react-three/fiber';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import { THEMES } from '@/app/config/theme';


const DodecahedronMesh = () => {
    const meshRef = useRef<any>(null);
    const {theme} = useContext(ThemeContext);
    
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh 
            ref={meshRef}
            scale={5.5}
        >
            <dodecahedronGeometry args={[1, 0]} />
            <meshPhongMaterial color={THEMES[theme]['accent']} wireframe={true} />
        </mesh>
    );
};

const Mesh2 = () => {
    const { ref: container_ref, inView: isInView } = useInView();
    
    useEffect(() => {
        console.log(isInView)
    }, [isInView]);

    return (
        <div 
            ref={container_ref} 
            className='fill' 
            style={{zIndex: 0}}
        >
            <Canvas               
                className='canvas'
                style={{width: '100%', height: '100%', position: 'absolute', zIndex: '0', opacity: 0.8}}
            >
                { isInView && <>
                    <ambientLight intensity={Math.PI / 1.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0.9} intensity={Math.PI * 100 } />
                    <pointLight position={[-10, -10, -10]} decay={0.4} intensity={Math.PI } />

                    <DodecahedronMesh />
                </> }
            </Canvas>
        </div>       
    )
}





export default Mesh2