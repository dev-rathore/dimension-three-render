import { useGLTF } from "@react-three/drei"

const Horse = () => {
  const horse = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-horse/model.gltf');

  return (
    <mesh scale={0.6} position={[0.75, -1, 0]}>
      <primitive object={horse.scene} />
    </mesh>
  );
};

export default Horse;
