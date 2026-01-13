export default function EmptyProfiles() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-16">
      <p className="text-lg text-gray-600">
        No profiles found matching your criteria.
      </p>
      <button className="px-6 py-2 border-2 border-pink-500 text-pink-600 font-bold rounded hover:bg-gradient-to-r hover:from-pink-500 to-rose-500 hover:text-white hover:border-transparent transition-all cursor-pointer">
        Clear Filters
      </button>
    </div>
  );
}
