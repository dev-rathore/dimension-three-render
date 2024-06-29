import { useGLTF } from "@react-three/drei"

const House = () => {
  const house = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/house-4/model.gltf');

  return (
    <mesh scale={4} position={[-6, 0.25, -4]} rotation-y={1.5}>
      <primitive object={house.scene} />
    </mesh>
  );
};

export default House;
