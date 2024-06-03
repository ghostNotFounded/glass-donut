import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";

import { Mesh } from "three";

export default function Model() {
  const mesh = useRef<Mesh>(null);

  const { nodes } = useGLTF("/media/torrus.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (!mesh.current) return null;

    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3.5}>
      <Text font="fonts/PPNeueMontreal-Bold.otf" position={[0, 0, -0.5]}>
        donut.
      </Text>

      <primitive object={nodes.Torus002} ref={mesh}>
        <MeshTransmissionMaterial {...materialProps} />
      </primitive>
    </group>
  );
}
