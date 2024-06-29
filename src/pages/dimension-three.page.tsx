import DimensionThree from "../components/dimension-three"
import Loader from "../components/loader/loader";
import { useModelContext } from "../contexts/model-context.provider";

const DimensionThreePage = () => {
  const {
    isModelLoading,
    isModelsLoading,
  } = useModelContext();

  return (
    <>
      {isModelsLoading || isModelLoading ? <Loader /> : <DimensionThree />}
    </>
  );
};

export default DimensionThreePage;
