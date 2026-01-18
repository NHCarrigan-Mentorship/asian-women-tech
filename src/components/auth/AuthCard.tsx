import { useState } from "react";
import { LogIn, Mail } from "lucide-react";

interface AuthCardProps {
  type: string;
}

export default function AuthCard({ type }: AuthCardProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  const loginCard = (
    <div className="bg-white p-8 border border-pink-100 rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <div className="inline-flex justify-center items-center w-16 h-16 mb-4 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full">
          <LogIn className="w-8 h-8" />
        </div>
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to continue your story</p>
      </div>
      {/* Form */}
      <form className="space-y-6">
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
      </form>
    </div>
  );

  const signupCard = (
    <>
      <h1>Sign Up</h1>
    </>
  );

  return <div>{type === "login" ? loginCard : signupCard}</div>;
}
