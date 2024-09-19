import LogoutButton from "components/auth/logout-button";
import { createServerSupabaseClient } from "utils/supabase/server";

export default async function MainLayout({ children }) {
  const supbase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supbase.auth.getSession();
  const username = session?.user?.email?.split("@")?.[0];
  return (
    <main>
      <div className="w-2/3 mx-auto flex items-center justify-between p-2">
        <h1 className="text-xl">{username ?? " - "}'s TODOList</h1>
        <LogoutButton></LogoutButton>
      </div>
      {children}
    </main>
  );
}
