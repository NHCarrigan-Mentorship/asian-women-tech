import { Menu, X } from "lucide-react";

interface MobileToggleMenuProps {
  isMenuOpen: boolean;
  onToggle: (isMenuOpen: boolean) => void;
}

export default function MobileToggleMenu({
  onToggle,
  isMenuOpen,
}: MobileToggleMenuProps) {
  return (
    <button
      onClick={() => onToggle(!isMenuOpen)}
      className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  );
}
