import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

const vertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vec3 normal = normalize(vNormal);
    float edge = abs(dot(normal, vec3(0.0, 0.0, 1.0)));
    edge = smoothstep(0.3, 0.7, edge);
    vec3 color = vec3(vPosition * 0.5 + 0.5);
    color = mix(vec3(0.0), color, edge);
    gl_FragColor = vec4(color, 1.0);
  }
`

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 })
  
  useFrame((state, delta) => {
    if (!hovered) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.02;
    } else {
      ref.current.rotation.x = mouseMove.y * 0.5;
      ref.current.rotation.y = mouseMove.x * 0.5;
    }
  })
  
  const handleMouseMove = (event: React.PointerEvent) => {
    if (hovered) {
      setMouseMove({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1
      })
    }
  }
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      onPointerMove={handleMouseMove}>
      
      <dodecahedronGeometry  args={[1, 2]}/>
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} wireframe={true} />
    </mesh>
  )
}


const Mesh = () => {
  return (
    <div>
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[0, 0, 3]} />            
        </Canvas>
    </div>
  )
}

export default Mesh