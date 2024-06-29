import { useGLTF } from "@react-three/drei"

const Character = () => {
  const character = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf');

  return (
    <mesh scale={0.6} position={[1.5, -1, 0]}>
      <primitive object={character.scene} />
    </mesh>
  )
};

export default Character;
