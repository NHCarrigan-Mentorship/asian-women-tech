import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  message?: string;
}
export default function LoadingState({
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-16">
      <Loader2 className="w-12 h-12 animate-spin text-pink-500" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
}
