import { useGLTF } from '@react-three/drei';
// import { ObjectMap } from '@react-three/fiber';
// import { type GLTF } from 'three-stdlib';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { INITIAL_MODEL, MODELS } from '../constants/models';

export type Color = {
  color: string;
  id: number;
  materialName: string;
}

export type Model = {
  gltfUrl: string;
  id: string;
  // props?: GLTF & ObjectMap; // & GLTF
  props?: any;
  name: string;
}

type ModelContextType = {
  activeModel: Model;
  handleActiveModel: (modelId: string) => void;
  isModelLoading: boolean;
  isModelsLoading: boolean;
  models: Model[];
  setActiveModel: React.Dispatch<React.SetStateAction<Model>>;
  setModels: React.Dispatch<React.SetStateAction<Model[]>>;
};

const ModelContext = createContext<ModelContextType>(null!);

export const useModelContext = (): ModelContextType => useContext(ModelContext);

export const ModelProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeModel, setActiveModel] = useState<Model>(INITIAL_MODEL);
  const [models, setModels] = useState<Model[]>([]);
  const [isModelsLoading, setIsModelsLoading] = useState<boolean>(true);
  const [isModelLoading, setIsModelLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsModelsLoading(true);
    setModels(MODELS);
    setActiveModel(MODELS[0]);
    setIsModelsLoading(false);
  }, []);

  const handleActiveModel = (modelId: string) => {
    setIsModelLoading(true);
    const model = models.find((m: Model) => m.id === modelId);
    if (model && model?.props) {
      setActiveModel(model);
      setIsModelLoading(false);
      return;
    } 
    const props = useGLTF(model!.gltfUrl);
    setActiveModel({
      ...model!,
      props,
    });
    setIsModelLoading(false);
  };

  return (
    <ModelContext.Provider
      value={{
        activeModel,
        handleActiveModel,
        isModelLoading,
        isModelsLoading,
        models,
        setActiveModel,
        setModels,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
