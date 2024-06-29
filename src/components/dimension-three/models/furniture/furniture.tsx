import { useGLTF } from "@react-three/drei"

const Furniture = () => {
  const furniture1 = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf');
  const furniture2 = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf');

  return (
    <group position={[0, -1, -6]}>
      <mesh scale={0.5} position={[3, 0, 6]}>
        <primitive object={furniture1.scene} />
      </mesh>
      <mesh scale={0.5} position={[3, 0, 5.3]}>
        <primitive object={furniture2.scene} />
      </mesh>
    </group>
  );
};

export default Furniture;
