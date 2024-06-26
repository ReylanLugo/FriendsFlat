"use client";
import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { toggleMenu, toggleProfile } from "@/store/slices/global";

export const UrlList: React.FC = () => {
  const globalState = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  function toggle() {
    if (globalState.toggleProfile) {
      dispatch(toggleProfile());
    }
    dispatch(toggleMenu());
  }

  return (
    <>
      <Image
        onClick={toggle}
        src={"/menuIcon.svg"}
        alt={""}
        width={22}
        height={22}
        className={"cursor-pointer sm:hidden"}
      />
      <ul
        className={
          globalState.toggleMenu
            ? "xs:flex xs:absolute xs:flex-wrap xs:bg-white xs:gap-2 xs:px-2 xs:py-1 xs:shadow xs:shadow-slate-300 xs:rounded-lg xs:top-10 xs:right-4 xs:w-24 z-20 sm:right-64 sm:top-3 sm:flex sm:w-full sm:flex-nowrap sm:gap-4 sm:text-nowrap sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none"
            : "xs:hidden hidden sm:flex sm:gap-4"
        }
      >
        <li>
          <Link href={"/"} className={"text-slate-500 hover:text-slate-700"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/favorites"}
            className={"text-slate-500 hover:text-slate-700"}
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            href={"/myapartments"}
            className={"text-slate-500 hover:text-slate-700"}
          >
            My Apartments
          </Link>
        </li>
      </ul>
    </>
  );
};
