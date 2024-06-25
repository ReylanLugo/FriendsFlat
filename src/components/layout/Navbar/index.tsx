import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <>
      <div
        className={
          "flex w-full justify-between bg-white px-8 py-4 shadow shadow-slate-300"
        }
      >
        <Image src={"/logo.png"} alt={"logo"} width={64} height={64} />
        <nav className={"flex items-center gap-3 text-sm"}>
          <a className={"text-slate-500 hover:text-slate-700"} href={"#"}>
            Home
          </a>
          <a className={"text-slate-500 hover:text-slate-700"} href={"#"}>
            Favorites
          </a>
          <a className={"text-slate-500 hover:text-slate-700"} href={"#"}>
            My Apartments
          </a>
          <Image
            src={"/defaultProfileImg.png"}
            alt={"profile"}
            width={40}
            height={40}
            className={"cursor-pointer rounded-full"}
          />
        </nav>
      </div>
    </>
  );
};
