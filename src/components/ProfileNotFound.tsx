import ErrorBackNavigation from "./ErrorBackNavigation";

export default function ProfileNotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-4xl font-bold">Profile Not Found</h1>
      <ErrorBackNavigation />
    </div>
  );
}
