import { Float, Html, OrbitControls, Text, useGLTF } from "@react-three/drei";

import {
  useModelContext,
} from "../../contexts/model-context.provider";
import Trees from "./models/trees/trees";
import Character from "./models/characters/character";
import Floor from "./models/floor/floor";
import House from "./models/house/house";
import Horse from "./models/characters/horse";
import Furniture from "./models/furniture/furniture";

import './3d-models.css';
import oswaldMediumFont from "../../assets/font/Oswald-Medium.ttf";

interface ModelProps {};

const ThreeDModels: React.FC<ModelProps> = () => {
  const {
    activeModel,
  } = useModelContext();
  const modelData = useGLTF(activeModel.gltfUrl);

  return (
    <>
      <OrbitControls
        maxDistance={12}
        maxPolarAngle={Math.PI / 2}
        minDistance={0.5}
        minPolarAngle={Math.PI / 4}
      />
      <directionalLight
        intensity={2}
        position={[1, 2, 3]}
      />
      <ambientLight intensity={1.5} />
      <group>
        {activeModel && 
          <mesh position={[0, -1, 0.5]} scale={activeModel.id === '4' ? 0.75 : 1}>
            <primitive object={modelData.scene} />
            <Html
              center
              distanceFactor={8}
              position={[1, 2, 0]}
              wrapperClass="model"
            >
              {activeModel.name} 🔥
            </Html>
          </mesh>}
        <Trees />
        <group position={[-3, 0, -5]}>
          <Character />
          <Horse />
        </group>
        <House />
        <Furniture />
        <Floor />
      </group>
      <Float speed={4}>
        <Text
          color={"#D3F6DB"}
          font={oswaldMediumFont}
          fontSize={0.5}
          fontWeight={600}
          maxWidth={5}
          position={[0, 2.3, 0]}
          textAlign="center"
        >
          DIMENSION THREE RENDER
        </Text>
      </Float>
    </>
  );
}

export default ThreeDModels;
