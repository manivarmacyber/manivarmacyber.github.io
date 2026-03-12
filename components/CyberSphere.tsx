import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const InnerCore = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random "exploit nodes"
  const nodesCount = 20;
  const positions = useMemo(() => {
    const pos = new Float32Array(nodesCount * 3);
    for (let i = 0; i < nodesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      const targetScale = isHovered ? 1.2 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      {/* Offensive Core Grid */}
      <Icosahedron ref={meshRef} args={[1.2, 1]}>
        <meshBasicMaterial 
          color={isHovered ? "#ff2a2a" : "#ff0055"} 
          wireframe={true}
          transparent
          opacity={0.4}
        />
      </Icosahedron>

      {/* Red Exploit Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color={isHovered ? "#ff0000" : "#ff2a2a"}
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const OuterShield = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.15;
      meshRef.current.rotation.z -= delta * 0.05;
    }
    if (gridRef.current) {
      gridRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Defensive Energy Barrier */}
      <Sphere ref={meshRef} args={[2, 32, 32]}>
        <MeshDistortMaterial
          color={isHovered ? "#00ffff" : "#8b5cf6"}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={isHovered ? 0.3 : 0.1}
          speed={2}
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Rotating Protection Grid */}
      <Sphere ref={gridRef} args={[2.05, 16, 16]}>
        <meshBasicMaterial
          color={isHovered ? "#00ffff" : "#4c1d95"}
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>
    </group>
  );
};

export const CyberSphereAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center relative cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${isHovered ? 'rgba(0, 255, 255, 0.15)' : 'rgba(139, 92, 246, 0.15)'} 0%, transparent 60%)`,
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />
      
      <div className="w-full h-full relative z-10" style={{ minHeight: '400px' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <InnerCore isHovered={isHovered} />
            <OuterShield isHovered={isHovered} />
          </Float>
        </Canvas>
      </div>
    </div>
  );
};

