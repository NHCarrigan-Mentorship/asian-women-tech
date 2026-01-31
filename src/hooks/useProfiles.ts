import camelcaseKeys from "camelcase-keys";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import type { UserProfile } from "../types/UserProfile";

export default function useProfiles() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Get profiles from Supabase
  useEffect(() => {
    async function getProfiles() {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("profiles").select("*");
        if (error) {
          setError(error);
          console.error(error);
        } else {
          setProfiles(camelcaseKeys(data, { deep: true }));
        }
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getProfiles();
  }, []);

  return { profiles, loading, error };
}
