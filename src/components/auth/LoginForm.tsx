import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while logging in.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 border border-pink-100 rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <div className="inline-flex justify-center items-center w-16 h-16 mb-4 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full">
          <LogIn className="w-8 h-8" />
        </div>
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to continue your story</p>
      </div>

      {/* Error Message  */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Login Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-gray-600 font-medium"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-pink-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="you@example.com"
            ></input>
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm text-gray-600 font-medium"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-pink-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            ></input>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
