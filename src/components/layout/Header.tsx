import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

import DesktopNavigationMenu from "../navigation/DesktopNavigationMenu";
import MobileToggleMenu from "../navigation/MobileToggleMenu";
import MobileNavigationMenu from "../navigation/MobileNavigationMenu";
import HomeNavigation from "../navigation/HomeNavigation";

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
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <HomeNavigation onClose={closeMenu} />
            {/* Mobile Toggle Menu */}
            <MobileToggleMenu
              isMenuOpen={isMenuOpen}
              onToggle={setIsMenuOpen}
            />
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
