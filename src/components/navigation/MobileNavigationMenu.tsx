import { Home, LogIn, LogOut, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileNavigationMenuProps {
  isActive: (path: string) => {};
  isAuthenticated: boolean;
  onClose: () => void;
  onLogout: () => void;
}
export default function MobileNavigationMenu({
  isActive,
  isAuthenticated,
  onClose,
  onLogout,
}: MobileNavigationMenuProps) {
  return (
    <div className="md:hidden py-3 border-t border-gray-200">
      <div className="flex flex-col gap-1">
        <Link
          to="/"
          onClick={onClose}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
            isActive("/")
              ? "bg-pink-50 text-pink-700"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-base">Home</span>
        </Link>
        <Link
          to="/discover"
          onClick={onClose}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
            isActive("/discover")
              ? "bg-pink-50 text-pink-700"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-base">Discover</span>
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              to="/my-profile"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                isActive("/my-profile")
                  ? "bg-pink-50 text-pink-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-base">My Profile</span>
            </Link>
            <button
              onClick={onLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-gray-600 hover:bg-gray-50 cursor-pointer text-left"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-base">Logout</span>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
              isActive("/login")
                ? "bg-pink-50 text-pink-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <LogIn className="w-5 h-5" />
            <span className="text-base">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
}
