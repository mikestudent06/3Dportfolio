"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";
import Particles from "@/components/three/hero/Particles";
import { use3DEnabled } from "@/hooks/use3DEnabled";

function FloatingCore() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

function PageHeroCanvas() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <FloatingCore />
      <Particles count={60} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} enablePan={false} />
    </Canvas>
  );
}

export default function PageHeroScene() {
  const enabled = use3DEnabled();

  return (
    <div className="page-hero-scene card-border rounded-2xl overflow-hidden min-h-[220px] md:min-h-[280px] lg:min-h-full">
      {enabled ? (
        <PageHeroCanvas />
      ) : (
        <div className="flex-center h-full min-h-[220px] bg-black-100">
          <div className="size-24 rounded-full border border-white/10 bg-white/5 blur-sm" />
        </div>
      )}
    </div>
  );
}
