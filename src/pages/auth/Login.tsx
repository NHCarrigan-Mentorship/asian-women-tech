import AuthBackNavigation from "../../components/navigation/AuthBackNavigation";
import AuthCard from "../../components/auth/AuthCard";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50">
      <div className="flex-1 flex justify-center items-center px-4 py-12">
        <div className="w-full max-w-md">
          <AuthBackNavigation />
          <AuthCard type="login" />
        </div>
      </div>
    </div>
  );
}
