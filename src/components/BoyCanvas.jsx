import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Boy(props) {
  const groupRef = useRef();
  const headRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth idle bobbing/breathing animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.15;
      groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.05;
    }
    
    // Head tracks mouse movement
    if (headRef.current) {
      // state.mouse.x/y range from -1 to 1
      const targetX = state.mouse.x * 0.5;
      const targetY = state.mouse.y * 0.4;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
    }
    
    // Arms float gently
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = -Math.PI / 6 + Math.sin(time * 1.5) * 0.08;
      leftArmRef.current.rotation.x = Math.sin(time * 2.0) * 0.06;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.PI / 6 - Math.sin(time * 1.5) * 0.08;
      rightArmRef.current.rotation.x = -Math.sin(time * 2.0) * 0.06;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Body / Hoodie */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.42, 0.52, 1.0, 32]} />
        <meshStandardMaterial color="#8a2be2" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Hoodie drawstrings / cyan accent stripes */}
      <mesh position={[-0.08, 0.12, 0.43]}>
        <boxGeometry args={[0.04, 0.3, 0.04]} />
        <meshStandardMaterial color="#00f0ff" roughness={0.2} />
      </mesh>
      <mesh position={[0.08, 0.12, 0.43]}>
        <boxGeometry args={[0.04, 0.3, 0.04]} />
        <meshStandardMaterial color="#00f0ff" roughness={0.2} />
      </mesh>

      {/* Head Group (w/ face, cap, visor, headset) */}
      <group ref={headRef} position={[0, 0.78, 0]}>
        {/* Head/Face */}
        <mesh castShadow>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial color="#ffcca3" roughness={0.4} /> {/* realistic skin shade */}
        </mesh>
        
        {/* Glass Developer Visor/Glasses */}
        <group position={[0, 0.04, 0.32]}>
          <mesh position={[-0.15, 0, 0]}>
            <boxGeometry args={[0.18, 0.1, 0.05]} />
            <meshStandardMaterial color="#1a1a2e" roughness={0.1} />
          </mesh>
          <mesh position={[0.15, 0, 0]}>
            <boxGeometry args={[0.18, 0.1, 0.05]} />
            <meshStandardMaterial color="#1a1a2e" roughness={0.1} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.12, 0.03, 0.03]} />
            <meshStandardMaterial color="#1a1a2e" />
          </mesh>
          {/* Neon cyber lenses */}
          <mesh position={[-0.15, 0, 0.02]}>
            <boxGeometry args={[0.15, 0.07, 0.03]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} transparent opacity={0.8} />
          </mesh>
          <mesh position={[0.15, 0, 0.02]}>
            <boxGeometry args={[0.15, 0.07, 0.03]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} transparent opacity={0.8} />
          </mesh>
        </group>
        
        {/* Cap (Backward/Trendy) */}
        <mesh position={[0, 0.2, -0.04]}>
          <sphereGeometry args={[0.39, 32, 32]} />
          <meshStandardMaterial color="#1f1f3a" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.12, -0.32]} rotation={[-0.15, 0, 0]}>
          <boxGeometry args={[0.45, 0.04, 0.28]} />
          <meshStandardMaterial color="#ff007f" roughness={0.4} />
        </mesh>
        
        {/* Sleek Programmer Headset */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[0.4, 0.034, 16, 64]} />
          <meshStandardMaterial color="#10101e" roughness={0.3} />
        </mesh>
        <mesh position={[-0.39, 0.0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.09, 32]} />
          <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.39, 0.0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.09, 32]} />
          <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.56, 0.3, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#8a2be2" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#8a2be2" />
        </mesh>
        <mesh position={[0, -0.54, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffcca3" />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.56, 0.3, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#8a2be2" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#8a2be2" />
        </mesh>
        <mesh position={[0, -0.54, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffcca3" />
        </mesh>
      </group>

      {/* Legs / Lower Body */}
      <group position={[0, -0.65, 0]}>
        <mesh position={[-0.18, -0.3, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.1, 0.6, 16]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.6} />
        </mesh>
        <mesh position={[0.18, -0.3, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.1, 0.6, 16]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.6} />
        </mesh>
        {/* Glowing Shoes */}
        <mesh position={[-0.18, -0.64, 0.08]} castShadow>
          <boxGeometry args={[0.15, 0.12, 0.26]} />
          <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0.18, -0.64, 0.08]} castShadow>
          <boxGeometry args={[0.15, 0.12, 0.26]} />
          <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Futuristic Hoverboard / Platform */}
      <group position={[0, -1.48, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.7, 0.62, 0.1, 6]} />
          <meshStandardMaterial color="#121226" roughness={0.2} metalness={0.7} />
        </mesh>
        {/* Cyber Neon Ring */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.66, 0.03, 16, 64]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.5} />
        </mesh>
        {/* Glow Particles underneath */}
        <pointLight position={[0, -0.3, 0]} color="#00f0ff" intensity={4} distance={2.5} decay={2} />
      </group>
    </group>
  );
}

export default function BoyCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }}>
      <Canvas 
        camera={{ position: [0, 0.3, 4.2], fov: 50 }}
        style={{ background: 'transparent' }}
        shadows
      >
        <ambientLight intensity={1.2} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={2.2} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, -2]} intensity={0.8} color="#8a2be2" />
        <pointLight position={[5, -5, 5]} intensity={1.5} color="#00f0ff" />
        
        <Boy position={[0, 0.4, 0]} scale={1.2} />
      </Canvas>
    </div>
  );
}
