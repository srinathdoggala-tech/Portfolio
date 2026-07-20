"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function Particles({ count = 800 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate coordinate array
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12; // X
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Slow orbital rotation
    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * 0.03;
    pointsRef.current.rotation.x = elapsed * 0.01;

    // Subtle parallax response to mouse cursor
    const targetX = mousePosition.x * 0.4;
    const targetY = mousePosition.y * 0.4;
    
    // Smooth lerp (linear interpolation) towards targets
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a855f7"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none overflow-hidden">
      {/* Light mesh grid or gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#04020b] to-black opacity-95 dark:opacity-100" />
      
      {/* Soft gradient floating blobs */}
      <div className="absolute top-[20%] left-[30%] -z-20 h-[350px] w-[350px] rounded-full bg-accent-purple/10 blur-[120px] animate-blob" />
      <div className="absolute bottom-[20%] right-[30%] -z-20 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[130px] animate-blob [animation-delay:2s]" />
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 65 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Particles count={700} />
      </Canvas>
    </div>
  );
}
