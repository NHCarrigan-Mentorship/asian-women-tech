import { useLocation, Outlet, Link } from "react-router-dom";
import { Users, Info } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeStyles = "bg-purple-50 text-purple-600";
  const defaultStyles = "text-gray-600 hover:bg-gray-50";

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Her Tech Story</span>
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`flex gap-2 px-3 py-2 items-center justify-center rounded-lg ${
                  isActive("/") ? activeStyles : defaultStyles
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Discover</span>
              </Link>
              <Link
                to="/"
                className={`flex gap-2 px-3 py-2 items-center justify-center ${
                  isActive("/about") ? activeStyles : defaultStyles
                }`}
              >
                <Info className="w-4 h-4"></Info>
                <span>About</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
