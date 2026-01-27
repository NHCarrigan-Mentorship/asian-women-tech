import { useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { profiles } from "../../data/profiles";

export default function UploadProfilesOnce() {
  useEffect(() => {
    async function upload() {
      const { data, error } = await supabase.from("profiles").insert(profiles);
      if (error) {
        console.error("Insert error:", error);
      } else {
        console.log("Inserted profiles:", data);
      }
    }
    upload();
  }, []);
  return null;
}
