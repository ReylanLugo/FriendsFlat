import React from "react";
import { createClient } from "@/utils/supabase/client";

export const ProfileMenu: React.FC = () => {
  const supabaseClient = createClient();

  const logout = async () => {
    await supabaseClient.auth.signOut();
    window.location.reload();
  };

  return (
    <>
      <div
        className={
          "absolute -bottom-14 right-2 z-20 rounded-lg bg-slate-800 p-4 text-slate-50 shadow shadow-slate-300"
        }
      >
        <span className={"cursor-pointer"} onClick={logout}>
          Logout
        </span>
      </div>
    </>
  );
};
