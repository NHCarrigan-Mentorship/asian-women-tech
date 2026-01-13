import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackNavigation() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/discover"); // Fallback to discover page
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded hover:from-pink-600 hover:to-rose-600 transition-all shadow-md cursor-pointer min-h-[44px]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Go Back</span>
      </button>
    </div>
  );
}
