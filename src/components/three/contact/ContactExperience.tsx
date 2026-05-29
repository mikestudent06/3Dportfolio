"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => (
  <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
    <color attach="background" args={["#0a0a0a"]} />
    <fog attach="fog" args={["#0a0a0a", 8, 20]} />
    <ambientLight intensity={0.4} color="#ffffff" />
    <directionalLight position={[5, 5, 3]} intensity={1.5} color="#ffffff" castShadow />
    <directionalLight position={[-3, 4, 2]} intensity={0.6} color="#a8b4ff" />
    <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />
    <group scale={[1, 1, 1]}>
      <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
    <group scale={0.03} position={[0, -1.49, -2]} castShadow>
      <Computer />
    </group>
  </Canvas>
);

export default ContactExperience;
