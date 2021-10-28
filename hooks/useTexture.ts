import { useEffect, useState } from "react";
import { Texture, TextureLoader } from "three";

export const useTexture = (path: string) => {
  const [textu, setTextu] = useState<Texture | undefined>(undefined);

  useEffect(() => {
    const textureImage = require("../assets/background/Background.png");
    const texture = new TextureLoader().load(textureImage);
    if (texture) texture.anisotropy = 16;
    setTextu(texture);
  }, [path]);

  return textu;
};
