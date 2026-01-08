import { useLocation, Link } from "react-router-dom";
import { Users, LogIn } from "lucide-react";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-8 h-8 rounded-lg"
  >
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#logo-grad)" rx="15" />
    <path
      d="M65 25 L75 35 L45 65 L30 70 L35 55 Z M62 28 L72 38"
      stroke="white"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="70" cy="30" r="3" fill="white" />
  </svg>
);

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeStyles = "bg-pink-50 text-pink-700";
  const defaultStyles = "text-gray-600 hover:bg-gray-50";

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-xl hidden md:inline">PinkTech</span>
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`flex gap-2 px-3 py-2 items-center justify-center rounded-lg ${
                  isActive("/") ? activeStyles : defaultStyles
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/login"
                className={`flex gap-2 px-3 py-2 items-center justify-center ${
                  isActive("/login") ? activeStyles : defaultStyles
                }`}
              >
                <LogIn className="w-4 h-4"></LogIn>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
