import ProfileContent from "./ProfileContent";
import ProfileInfobox from "./ProfileInfobox";

interface ProfileCardProps {
  id: string;
}

export default function ProfileCard({ id }: ProfileCardProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
        <ProfileInfobox id={id} />
        <ProfileContent id={id}/>
      </div>
    </div>
  );
}
