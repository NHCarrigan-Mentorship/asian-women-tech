import { Link } from "react-router-dom";
import Logo from "/favicon.svg";

export default function HomeNavigation() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
    >
      <img src={Logo} alt="PinkTech Logo" className="h-8 w-8 md:h-10 md:w-10" />
      <span className="text-lg md:text-xl font-bold text-gray-900">
        PinkTech
      </span>
    </Link>
  );
}
