import React, { FC, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import THREE, { Color, PerspectiveCamera } from "three";
import { Smoke } from "./Smoke";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTexture } from "../hooks/useTexture";

import styles from "../styles/Background.module.css";

interface IProps {}

export const Background: FC<IProps> = () => {
  const canva = useRef<HTMLCanvasElement>(null);

  const { width, height } = useWindowSize();

  const texture = useTexture("../public/smoke-2.png");

  const SIZE = new Array(30).fill(true);

  const camera = new PerspectiveCamera(
    45,
    (width ?? 1920) / (height ?? 1080),
    1,
    1000
  );

  camera.position.setZ(500);

  return (
    <Canvas
      style={{
        width,
        height,
      }}
      className={styles.canva}
      ref={canva}
      camera={camera}
    >
      {SIZE.map((_, i) => (
        <Smoke texture={texture} key={i} />
      ))}
      <ambientLight color={new Color("#FAFAFA")} intensity={0.3} />
      <directionalLight
        intensity={1}
        position={[500, 0, 1000]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
        color={new Color("#FAFAFA")}
      />
      <directionalLight
        intensity={1}
        position={[-500, 0, 0]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
        color={new Color("#007CFF")}
      />
    </Canvas>
  );
};

export default Background;
