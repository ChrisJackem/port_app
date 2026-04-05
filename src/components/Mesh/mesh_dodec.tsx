/* import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'

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

type MeshDodecProps = ThreeElements['mesh'] & { 
  hovered: boolean, 
  mouseMove: { x: number, y: number } 
}

export default function MeshDodec(props: MeshDodecProps) {
  const ref = useRef<THREE.Mesh>(null!)
  const shaderRef = useRef<THREE.ShaderMaterial>(null!)
  const [clicked, click] = useState(false)
  const velocityRef = useRef({ x: 0, y: 0 })

  function Render() {
    // Takes over the render-loop, the user has the responsibility to render
    useFrame(({ gl, scene, camera }) => {
      gl.render(scene, camera)
    }, 1)
  }
  

  useFrame((state, delta) => {
    if (!props.hovered) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.01;
    } else {
      if ( Math.abs(ref.current.rotation.y) > 0.5 || Math.abs(ref.current.rotation.x) > 0.5 ){
        velocityRef.current = { x: 0, y: 0 }
        ref.current.rotation.y = 0;
        ref.current.rotation.x = 0;
      }
      const targetX = props.mouseMove.y * 0.4;
      const targetY = props.mouseMove.x * 0.4;
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
  }

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1: 1.7}
      onClick={handleClick}>      
      <dodecahedronGeometry  args={[1, 1]}/>
      <shaderMaterial 
        ref={shaderRef}
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader} 
        wireframe={true}
      />
    </mesh>
  )
} */