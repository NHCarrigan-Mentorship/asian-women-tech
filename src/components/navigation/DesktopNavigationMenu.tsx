import { Link } from "react-router-dom"
import { Compass, LogIn, LogOut, User, Users } from "lucide-react"

interface DesktopHeaderNavigation {
    isActive: (path: string) => {};
    isAuthenticated: boolean;
    onLogout: () => void;
}

export default function DesktopNavigationMenu({isActive, isAuthenticated, onLogout} : DesktopHeaderNavigation) {
    return (<div className="hidden md:flex gap-6">
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
                onClick={onLogout}
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
    )
}