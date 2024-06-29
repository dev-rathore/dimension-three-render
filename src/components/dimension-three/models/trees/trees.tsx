import { useGLTF } from "@react-three/drei"

const Trees = () => {
  const tree1 = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf');
  const tree2 = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf');
  const tree3 = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-4-kaykit/model.gltf');

  return (
    <group position={[0, -1, 0]}>
      <mesh scale={0.1} position={[-3, 0, 4]}>
        <primitive object={tree1.scene} />
      </mesh>
      <mesh scale={0.25} position={[3, 0, -4]}>
        <primitive object={tree2.scene} />
      </mesh>
      <mesh scale={1} position={[-5, 0, 1]}>
        <primitive object={tree3.scene} />
      </mesh>
    </group>
  )
};

export default Trees;
