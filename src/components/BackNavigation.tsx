import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackNavigation() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <button
        className="inline-flex items-center gap-2 min-h-[44px] -ml-2 pl-2 pr-4 py-2 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors hover:bg-pink-50"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Go Back</span>
      </button>
    </div>
  );
}
