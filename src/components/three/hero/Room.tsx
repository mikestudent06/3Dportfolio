"use client";

import { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import type { Group } from "three";

export function Room(props: React.ComponentProps<"group">) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef<THREE.Mesh | null>(null);
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshPhongMaterial({ color: "#d90429" });
  const bodyMaterial = new THREE.MeshPhongMaterial({ map: matcapTexture });
  const tableMaterial = new THREE.MeshPhongMaterial({ color: "#582f0e" });
  const radiatorMaterial = new THREE.MeshPhongMaterial({ color: "#fff" });
  const compMaterial = new THREE.MeshStandardMaterial({ color: "#fff" });
  const pillowMaterial = new THREE.MeshPhongMaterial({ color: "#8338ec" });
  const chairMaterial = new THREE.MeshPhongMaterial({ color: "#000" });

  const n = nodes as Record<string, THREE.Mesh>;

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef as React.RefObject<THREE.Object3D>}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      <mesh geometry={n._________6_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={n.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={n.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={n.chair_body_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={n.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh ref={screensRef} geometry={n.emis_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={n.handls_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.keyboard_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.kovrik_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.lamp_bl_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.lamp_white_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.miuse_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.monitor2_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.monitor3_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.pCylinder5_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={n.polySurface53_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.radiator_blinn1_0.geometry} material={radiatorMaterial} />
      <mesh geometry={n.radiator_blinn1_0001.geometry} material={materials.blinn1} />
      <mesh geometry={n.railing_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.red_bttns_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.red_vac_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.stylus_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={n.tablet_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.triangle_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.vac_black_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.vacuum1_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.vacuumgrey_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.vires_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.window_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={n.window4_phong1_0.geometry} material={materials.phong1} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
