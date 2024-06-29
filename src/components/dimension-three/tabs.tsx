import { useModelContext } from "../../contexts/model-context.provider";

const Tabs: React.FC = () => {
  const {
    models,
    activeModel,
    handleActiveModel,
  } = useModelContext();

  return (
    <div className="absolute bottom-8 md:bottom-20 left-0 right-0 z-50 flex justify-start md:justify-center px-8">
      <div className="flex flex-col md:flex-row justify-center rounded-lg overflow-hidden divide-y-4 divide-x-0 md:divide-y-0 md:divide-x-4 divide-slate-300">
        {
          models.map((model) => (
            <div
              key={model.id}
              className={`${model.id === activeModel.id ? 'bg-[#0B3142]/90 hover:bg-[#0B3142] text-white' : 'bg-slate-50 hover:bg-slate-200 text-slate-600'} font-medium py-2 px-4 md:py-4 md:px-8 text-base md:text-xl cursor-pointer transition-colors ease-in`}
              onClick={() => handleActiveModel(model.id)}
            >
              {model.name}
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Tabs;
