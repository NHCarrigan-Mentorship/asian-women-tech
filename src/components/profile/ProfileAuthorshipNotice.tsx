import { Info } from "lucide-react";

export default function () {
  return (
    <div className="bg-pink-50 border border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-pink-800">
          <Info className="w-4 h-4" />
          <span>This profile is written and maintained by the member.</span>
        </div>
      </div>
    </div>
  );
}
