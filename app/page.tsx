import UI from "./ui";
import { createServerSupabaseClient } from "utils/supabase/server";

export default async function Home() {
  return (
    <main>
      <UI></UI>
    </main>
  );
}
