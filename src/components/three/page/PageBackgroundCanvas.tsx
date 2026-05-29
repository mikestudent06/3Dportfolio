"use client";

import { Canvas } from "@react-three/fiber";
import Particles from "@/components/three/hero/Particles";

export default function PageBackgroundCanvas() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 60 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.25} />
      <Particles count={120} />
    </Canvas>
  );
}
