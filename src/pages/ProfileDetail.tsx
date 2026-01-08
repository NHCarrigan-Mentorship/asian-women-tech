import { useParams } from "react-router-dom";

export default function ProfileDetail() {
  // Get profile ID
  // Render profile

  const { id } = useParams();

  return (
    <div>
      <h1>Dr. Amara Johnson</h1>
    </div>
  );
}
