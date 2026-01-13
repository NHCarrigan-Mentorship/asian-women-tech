import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import DesktopNavigationMenu from "../navigation/DesktopNavigationMenu";
import MobileNavigationMenu from "../navigation/MobileNavigationMenu";
import Logo from "/favicon.svg";

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
              <img
                src={Logo}
                alt="PinkTech Logo"
                className="h-8 w-8 md:h-10 md:w-10"
              />
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
            <DesktopNavigationMenu
              isActive={isActive}
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          </div>
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <MobileNavigationMenu
              isActive={isActive}
              isAuthenticated={isAuthenticated}
              onClose={closeMenu}
              onLogout={handleLogout}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
