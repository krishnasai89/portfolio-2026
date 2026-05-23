"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function FloatingMesh() {
  const meshRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.15) * 0.15;
    meshRef.current.rotation.y = Math.cos(time * 0.15) * 0.15;
  });

  // Explicit unmount hook to protect device performance
  useEffect(() => {
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
      }
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshNormalMaterial wireframe opacity={0.15} transparent />
    </mesh>
  );
}

export default function CanvasView() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen bg-[#070707]">
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <FloatingMesh />
      </Canvas>
    </div>
  );
}
