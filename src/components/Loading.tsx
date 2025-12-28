const Loading = () => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow">
      <h2 className="mb-4 text-xl font-semibold">Loading results</h2>
      <div className="flex justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
      </div>
    </div>
  );
};

export default Loading;
