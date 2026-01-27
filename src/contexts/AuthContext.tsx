import { useState, useEffect, createContext, useContext } from "react";
import { type ReactNode } from "react";

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  name: string;
  image?: string | null;
  bio?: string | null; // Short summary for cards/previews (1-2 sentences)
  role?: string | null;
  company?: string | null;
  location?: string;
  expertise?: string[] | null;
  website?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  lastUpdated?: string | null;
  content?: string | null; // Free-form markdown content for Wikipedia-style profile
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    username: string,
    email: string,
    password: string,
    name: string,
  ) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("pinkTechUser");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem("pinkTechUser");
      }
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("pinkTechUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("pinkTechUser");
    }
  }, [user]);

  const login = async (_email: string, _password: string) => {
    // Mock authentication - in real app, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Create a mock user
    const mockUser: UserProfile = {
      id: "user-" + Date.now(),
      username: "janesmith",
      email: "janesmith@example.com",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      name: "Jane Smith",
      role: "Software Engineer",
      company: "Tech Company",
      location: "San Francisco, CA",
      bio: "Passionate about creating innovative solutions and empowering women in technology.",
      expertise: ["Software Development", "Leadership"],
      website: "https://example.com",
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "@janesmith",
      lastUpdated: new Date().toISOString(),
    };

    setUser(mockUser);
  };

  const signup = async (
    username: string,
    email: string,
    _password: string,
    name: string,
  ) => {
    // Mock signup - in real app, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newUser: UserProfile = {
      id: "user-" + Date.now(),
      username,
      email,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      name,
      role: "",
      company: "",
      location: "",
      bio: "",
      expertise: [],
      linkedin: "",
      twitter: "",
      lastUpdated: new Date().toISOString(),
    };

    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
