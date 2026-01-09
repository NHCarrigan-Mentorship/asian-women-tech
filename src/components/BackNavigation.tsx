import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackNavigation() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto">
      <button
        className="flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-3 text-gray-600 hover:text-pink-600 cursor-pointer transiton-colors"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Go Back</span>
      </button>
    </div>
  );
}
