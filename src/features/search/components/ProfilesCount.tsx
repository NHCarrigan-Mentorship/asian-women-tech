interface ProfilesCountProps {
  count: number;
}

export default function ProfilesCount({ count }: ProfilesCountProps) {
  return (
    <div className="mt-4 text-sm text-pink-800 font-medium">
      Showing {count} {count === 1 ? "profile" : "profiles"}
    </div>
  );
}
