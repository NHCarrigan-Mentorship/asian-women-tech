import { Link, useLocation } from "react-router-dom";
import { Users, Compass, LogIn, User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // SVG logo matching the favicon
  const Logo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-8 h-8 md:w-10 md:h-10"
    >
      <defs>
        <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#f43f5e", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#nav-grad)" rx="15" />
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

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              onClick={closeMenu}
            >
              <Logo />
              <span className="text-lg md:text-xl font-bold text-gray-900">
                PinkTech
              </span>
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive("/")
                    ? "bg-pink-50 text-pink-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/discover"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive("/discover")
                    ? "bg-pink-50 text-pink-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Discover</span>
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/my-profile"
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isActive("/my-profile")
                        ? "bg-pink-50 text-pink-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>My Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-50 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive("/login")
                      ? "bg-pink-50 text-pink-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-3 border-t border-gray-200">
              <div className="flex flex-col gap-1">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                    isActive("/")
                      ? "bg-pink-50 text-pink-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span className="text-base">Home</span>
                </Link>
                <Link
                  to="/discover"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                    isActive("/discover")
                      ? "bg-pink-50 text-pink-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Compass className="w-5 h-5" />
                  <span className="text-base">Discover</span>
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/my-profile"
                      onClick={closeMenu}
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
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-gray-600 hover:bg-gray-50 cursor-pointer text-left"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="text-base">Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={closeMenu}
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
          )}
        </div>
      </nav>
    </header>
  );
}
