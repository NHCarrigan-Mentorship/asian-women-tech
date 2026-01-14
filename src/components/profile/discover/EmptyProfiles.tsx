interface EmptyProfilesProps {
  onClearFilters: () => void;
}

export default function EmptyProfiles({ onClearFilters }: EmptyProfilesProps) {
  return (
    <div className="text-center py-16">
      <p className="text-lg text-gray-600 mb-4">
        No profiles found matching your criteria.
      </p>
      <button
        onClick={onClearFilters}
        className="px-6 py-2 bg-white border-2 border-pink-500 text-pink-600 font-bold rounded hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white hover:border-transparent transition-all cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
  );
}
