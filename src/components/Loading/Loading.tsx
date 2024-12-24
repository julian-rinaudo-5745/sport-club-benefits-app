export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-pink-500">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-semibold">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};
