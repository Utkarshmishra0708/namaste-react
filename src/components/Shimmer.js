const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-40 bg-gray-700 rounded-lg animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
