import React from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export const Navbar: React.FC = async () => {
  const session = await createClient().auth.getUser();

  return (
    <>
      <div
        className={
          "flex w-full justify-between border-b border-slate-200 bg-white px-8 py-4 shadow shadow-slate-300"
        }
      >
        <Image src={"/logo.png"} alt={"logo"} width={64} height={64} />
        <nav className={"flex items-center gap-3 text-sm"}>
          {session ? (
            <>
              <Link
                href={"/"}
                className={"text-slate-500 hover:text-slate-700"}
              >
                Home
              </Link>
              <Link
                href={"/favorites"}
                className={"text-slate-500 hover:text-slate-700"}
              >
                Favorites
              </Link>
              <Link
                href={"/myapartments"}
                className={"text-slate-500 hover:text-slate-700"}
              >
                My Apartments
              </Link>
              <Image
                src={"/defaultProfileImg.png"}
                alt={"profile"}
                width={40}
                height={40}
                className={"cursor-pointer rounded-full"}
              />
            </>
          ) : (
            <a
              href={"/login"}
              className={"text-slate-500 hover:text-slate-700"}
            >
              Login
            </a>
          )}
        </nav>
      </div>
    </>
  );
};
