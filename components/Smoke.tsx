import React, { FC, useRef } from "react";
import { Color, Texture } from "three";
import { useFrame } from "@react-three/fiber";

interface IProps {
  texture: Texture | undefined;
}

export const Smoke: FC<IProps> = (props: IProps) => {
  const { texture } = props;

  const plane = useRef();

  useFrame(() => {
    if (plane && plane.current) {
      //@ts-ignore
      plane.current.rotation.z += Math.random() / 500;
    }
  });

  const position = {
    x: Math.random() * 1000 - 500,
    y: Math.random() * 1000 - 500,
    z: Math.random() * 1000 - 100,
  };
  const scale = 3;

  return (
    <mesh
      position={[position.x, position.y, position.z]}
      rotation={[0, 0, Math.random() * 360]}
      scale={[scale, scale, scale]}
      ref={plane}
    >
      <planeGeometry attach="geometry" args={[256, 256]} />
      <meshLambertMaterial
        attach="material"
        map={texture}
        opacity={0.07}
        transparent
        color={new Color("#FFFFFF")}
      />
    </mesh>
  );
};

export default Smoke;
