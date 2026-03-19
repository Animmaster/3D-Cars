import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { applyProps, useFrame } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";

export function Model(props) {
  const reference = useRef();

  const { scene } = useGLTF(props.url);
  scene.visible = true;

useFrame((state, delta) => {
	reference.current.rotation.y += delta * 0.6
})

  return (
    <primitive
      ref={reference}
      object={scene}
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
    />
  );
}
