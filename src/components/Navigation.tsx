import { useLocation, Outlet } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="text-black">Asian Women Tech</div>
      <Outlet />
    </nav>
  );
}
