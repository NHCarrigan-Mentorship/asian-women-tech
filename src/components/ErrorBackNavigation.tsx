import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ErrorBackNavigation() {
  const navigate = useNavigate();

  return (
    <button
      className="inline-flex items-center gap-2 min-h-[44px] -ml-2 pl-2 pr-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 cursor-pointer transition-colors"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-xl">Go Back</span>
    </button>
  );
}
