"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Model from "@/components/Model";

export default function Scene() {
  return (
    <Canvas className="h-screen bg-black" style={{ backgroundColor: "black" }}>
      <Environment preset="sunset" />
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Model />
    </Canvas>
  );
}
