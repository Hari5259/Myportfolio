import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GalaxyParticles() {
  const pointsRef = useRef();
  
  const count = 1200;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    const themeColors = [
      new THREE.Color('#00f0ff'), // cyan
      new THREE.Color('#8a2be2'), // purple
      new THREE.Color('#ff007f'), // pink
    ];
    
    for (let i = 0; i < count; i++) {
      // Spiral/galaxy configuration
      const r = Math.random() * 8 + 0.5;
      const spinAngle = r * 1.5;
      const branchAngle = ((i % 3) * 2 * Math.PI) / 3;
      
      const x = Math.cos(branchAngle + spinAngle) * r + (Math.random() - 0.5) * 0.4;
      const y = (Math.random() - 0.5) * 0.6;
      const z = Math.sin(branchAngle + spinAngle) * r + (Math.random() - 0.5) * 0.4;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      const color = themeColors[i % 3].clone();
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    
    return [pos, cols];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      // Spin the galaxy slowly
      pointsRef.current.rotation.y = time * 0.02;
      
      // Tilt and shift rotation based on user mouse interaction
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        state.mouse.y * 0.12,
        0.05
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        state.mouse.x * 0.12,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Canvas3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 65 }}>
        <GalaxyParticles />
      </Canvas>
    </div>
  );
}
