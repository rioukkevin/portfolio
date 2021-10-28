import React, { FC, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import THREE, { Color, PerspectiveCamera } from "three";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTexture } from "../hooks/useTexture";

import pic from "../assets/background/Background2x.png";
import styles from "../styles/Background.module.css";

interface IProps {
  isCanva?: boolean;
}

export const Background: FC<IProps> = (props) => {
  const canva = useRef<HTMLCanvasElement>(null);

  const { width, height } = useWindowSize();

  const texture = useTexture("../assets/background/Background.png");

  const camera = new PerspectiveCamera(
    45,
    (width ?? 1920) / (height ?? 1080),
    1,
    1000
  );

  camera.position.setZ(1000);

  return props.isCanva ? (
    <Canvas
      style={{
        width,
        height,
      }}
      className={styles.canva}
      ref={canva}
      camera={camera}
    >
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}>
        <planeGeometry attach="geometry" args={[2560, 1440]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          opacity={1}
          transparent
        />
      </mesh>
      <pointLight
        color={new Color("#FFFFFF")}
        position={[0, 0, 900]}
        intensity={1}
      />
    </Canvas>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={pic} alt="Picture" className={styles.back} />
  );
};

export default Background;
