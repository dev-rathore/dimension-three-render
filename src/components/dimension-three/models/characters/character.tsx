import { useGLTF } from "@react-three/drei"
import { useEffect } from "react";

import * as THREE from 'three';

const Character = () => {
  const character = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf');

  useEffect(() => {
    const mixer = new THREE.AnimationMixer(character.scene);
    const action = mixer.clipAction(character.animations[0]);
    action.play();

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      mixer.update(clock.getDelta());
    };

    animate();
  }, [character]);

  return (
    <mesh scale={0.6} position={[1.5, -1, 0]} castShadow>
      <primitive object={character.scene} />
    </mesh>
  )
};

export default Character;
