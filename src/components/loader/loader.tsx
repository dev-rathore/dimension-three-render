const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-solid border-r-transparent border-l-transparent border-primary"></div>
    </div>
  );
};

export default Loader;
