import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Discover from "./pages/main/Discover";
import Home from "./pages/main/Home";
import Layout from "./components/layout/Layout";
import ProfileDetail from "./pages/main/ProfileDetail";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
