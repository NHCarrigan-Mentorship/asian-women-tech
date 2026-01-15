import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileNavigationMenu from "../navigation/MobileNavigationMenu";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <MobileNavigationMenu />
      <Footer />
    </div>
  );
}
