const Shimmer = () => {
    return (
      <div className="shimmer-container flex flex-wrap gap-8 justify-center mt-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-64 h-64 bg-gray-200 rounded-lg animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  