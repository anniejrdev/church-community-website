export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
      
      <div className="flex flex-col items-center gap-3">
        
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm text-gray-600 font-medium">
          Loading...
        </p>

      </div>

    </div>
  );
}