
import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import MeshDodec from './mesh_dodec'
import MeshBoxes from './mesh_boxes'
import { motion, useInView } from 'motion/react';

type MeshProps = {
  type: 'dodec' | 'boxes' | undefined
}

const Mesh = (props:MeshProps) => {
  const [hovered, hover] = useState(false)
  const container_ref = useRef(null)
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 })
  const isInView = useInView(container_ref);
  
  const handleMouseMove = (event: React.PointerEvent) => {
    setMouseMove({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: (event.clientY / window.innerHeight) * 2 - 1
    })
  }

/*  useEffect(() => {
    // Stop the animation loop
    renderer.setAnimationLoop(null);

    // To restart later
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
}, [isInView]) */

  
  
  return (    
    <Canvas
      ref={container_ref}
      className='canvas'
      /* override*/
      style={{width: '100%', height: '100%', position: 'absolute', zIndex: '0', opacity: 0.8}}
      onPointerMove={handleMouseMove}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}>
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0.9} intensity={Math.PI * 100 } />
        <pointLight position={[-10, -10, -10]} decay={0.4} intensity={Math.PI } />
        {props.type === 'dodec' && 
          <MeshDodec 
            hovered={hovered} 
            mouseMove={mouseMove} 
            position={[.2, 0, 3.1]} 
          />}
        {props.type === 'boxes' && 
          <MeshBoxes
            hovered={hovered} 
            mouseMove={mouseMove} 
            position={[.2, 0, 3.1]} 
          />}        
    </Canvas>
  )
}

export default Mesh