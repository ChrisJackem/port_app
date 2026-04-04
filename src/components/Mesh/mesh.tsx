import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

const vertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vPosition = position;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  uniform vec3 uColor;

  void main() {
    vec3 normal = normalize(vNormal);
    float edge = abs(dot(normal, vec3(0.0, 0.0, 1.0)));
    edge = smoothstep(0.3, 0.7, edge);
    vec3 color = uColor;
    color = mix(uColor, color, edge);
    gl_FragColor = vec4(color, 1.0);
  }
`

function Box(props: ThreeElements['mesh'] & { hovered: boolean; mouseMove: { x: number; y: number } }) {
  const ref = useRef<THREE.Mesh>(null!)
  const shaderRef = useRef<THREE.ShaderMaterial>(null!)
  const [clicked, click] = useState(false)
  const [shaderColor, setShaderColor] = useState({ r: 0.2, g: 0.2, b: 0.2 })
  const velocityRef = useRef({ x: 0, y: 0 })
  
  useFrame((state, delta) => {
    if (!props.hovered) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.01;
      /* velocityRef.current = { x: 0, y: 0 } */
    } else {
      const targetX = props.mouseMove.y * 0.5;
      const targetY = props.mouseMove.x * 0.5;
      velocityRef.current.x += (targetX - ref.current.rotation.x) * 0.1;
      velocityRef.current.y += (targetY - ref.current.rotation.y) * 0.1;
      ref.current.rotation.x += velocityRef.current.x * delta;
      ref.current.rotation.y += velocityRef.current.y * delta;
      velocityRef.current.x *= 0.95;
      velocityRef.current.y *= 0.95;
    }
  })
  
  const handleClick = () => {
    click(!clicked)
    const randomColor = { r: Math.random(), g: Math.random(), b: Math.random() }
    setShaderColor(randomColor)
    console.log(JSON.stringify(randomColor))
    if (shaderRef.current) {
      shaderRef.current.uniforms.uColor.value.set(randomColor.r, randomColor.g, randomColor.b)
    }
  }

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.7 : 1}
      onClick={handleClick}>      
      <dodecahedronGeometry  args={[1, 1]}/>
      <shaderMaterial 
        ref={shaderRef}
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader} 
        wireframe={true}
        uniforms={{
          uColor: { value: new THREE.Color(shaderColor.r, shaderColor.g, shaderColor.b) }
        }}
      />
    </mesh>
  )
}


const Mesh = () => {
  const [hovered, hover] = useState(false)
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (event: React.PointerEvent) => {
    setMouseMove({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: (event.clientY / window.innerHeight) * 2 - 1
    })
  }
  
  return (
    <Canvas 
      style={{width: '100%', height: '100%', position: 'absolute', zIndex: '1', opacity: 0.5}}
      onPointerMove={handleMouseMove}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}>
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0.9} intensity={Math.PI * 100 } />
        <pointLight position={[-10, -10, -10]} decay={0.4} intensity={Math.PI } />
        <Box position={[.2, 0, 3.1]} hovered={hovered} mouseMove={mouseMove} />            
    </Canvas>
  )
}

export default Mesh