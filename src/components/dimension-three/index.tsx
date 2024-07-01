import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import ThreeDModels from "./3d-models";
import { useModelContext } from "../../contexts/model-context.provider";
import Tabs from "./tabs";

const DimensionThree: React.FC = () => {
  const {
  } = useModelContext();

  return (
    <div className="canvas-block">
      <Canvas
        shadows
        dpr={1}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{
          fov: 45,
          near: 0.5,
          far: 200,
          position: [6, 2, 6],
        }}
      >
        <ThreeDModels />
      </Canvas>
      <Tabs />
    </div>
  );
};

export default DimensionThree;
