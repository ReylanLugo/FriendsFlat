import React from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { ProfileUser } from "@/components/layout/Navbar/ProfileUser";
import { UrlList } from "@/components/features/navbar/UrlList";

export const Navbar: React.FC = async () => {
  const session = await createClient().auth.getSession();

  return (
    <>
      <div
        className={
          "xs:px-4 flex w-full justify-between border-b border-slate-200 bg-white px-8 py-4 shadow shadow-slate-300"
        }
      >
        <Image src={"/logo.png"} alt={"logo"} width={64} height={64} />
        <nav className={"relative flex items-center gap-3 text-sm"}>
          {session.data.session ? (
            <>
              <UrlList />
              <ProfileUser />
            </>
          ) : (
            <Link
              href={"/login"}
              className={
                "flex items-center gap-2 text-slate-500 hover:text-slate-700"
              }
            >
              <Image
                src={"/loginIcon.png"}
                alt={"login"}
                width={24}
                height={24}
              />
              Login
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};
