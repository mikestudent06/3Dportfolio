"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Computer(props: React.ComponentProps<"group">) {
  const { nodes, materials } = useGLTF("/models/computer-optimized-transformed.glb");
  const n = nodes as Record<string, THREE.Mesh>;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={n.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={n.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
