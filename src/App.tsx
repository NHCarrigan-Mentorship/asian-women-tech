import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/main/Home";
import Layout from "./components/layout/Layout";
import ProfileDetail from "./pages/main/ProfileDetail";
import Login from "./pages/auth/Login";
import Search from "./pages/main/Search";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<ProfileDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
