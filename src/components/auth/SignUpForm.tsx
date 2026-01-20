import { UserPlus } from "lucide-react";

export default function SignUpForm() {
  return (
    <div className="bg-white p-8 border border-pink-100 rounded-2xl shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex justify-center items-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white">
          <UserPlus className="w-8 h-8" />
        </div>
        <h1 className="mb-2 text-3xl font-bold">Join PinkTech</h1>
        <p className="text-gray-600">
          Create your profile and share your story
        </p>
      </div>
    </div>
  );
}
