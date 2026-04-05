
import React, { useEffect, useRef, useState } from 'react'
/* import { Canvas } from '@react-three/fiber' */
import MeshDodec from './mesh_dodec'
import MeshBoxes from './mesh_boxes'
import { useInView } from 'motion/react';
import { Canvas, useThree } from '@react-three/fiber'


const STYLE = {width: '100%', height: '100%', position: 'absolute', zIndex: '0', opacity: 0.8}

type MeshProps = {
  type: 'dodec' | 'boxes' | undefined
}

type CustomCanvasProps = {
  type: 'dodec' | 'boxes' | undefined
  mouseMove: { x: number; y: number }
  onMouseMove: (event: React.PointerEvent) => void
}

const Mesh = (props:MeshProps) => {
    const container_ref = useRef(null)
    const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 })
    const isInView = useInView(container_ref);
  
  const handleMouseMove = (event: React.PointerEvent) => {
    setMouseMove({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: (event.clientY / window.innerHeight) * 2 - 1
    })
  }
  
  return (       
    <div ref={container_ref} style={{width: '100%', height: '100%', position: 'absolute', zIndex: '0', opacity: 0.8}}>
      <CustomCanvas
        type={props.type}
        mouseMove={mouseMove}
        onMouseMove={handleMouseMove}
      />
    </div>
  )
}

type RenderLoopControllerProps = {
  targetRef: React.RefObject<HTMLCanvasElement | null>
}

function CustomCanvas(props: CustomCanvasProps){
  const [hovered, hover] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isInView = useInView(canvasRef)

  return (
    <Canvas      
      className='canvas'
      ref={canvasRef}
      /* override*/
      style={{width: '100%', height: '100%', position: 'absolute', zIndex: '0', opacity: 0.8}}
      onPointerMove={props.onMouseMove}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}>
        
        { isInView && <>
          <ambientLight intensity={Math.PI / 1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0.9} intensity={Math.PI * 100 } />
          <pointLight position={[-10, -10, -10]} decay={0.4} intensity={Math.PI } />
          
          {props.type === 'dodec' &&  
            <MeshDodec 
              hovered={hovered}
              mouseMove={props.mouseMove} 
              position={[.2, 0, 3.1]} 
            />}

          {props.type === 'boxes' &&
            <MeshBoxes
              hovered={hovered} 
              mouseMove={props.mouseMove} 
              position={[.2, 0, 3.1]} 
            />}  

          </>}
    </Canvas>
    )
}

export default Mesh