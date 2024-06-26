"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchValue } from "@/store/slices/global";

export const SearchByName: React.FC = () => {
  const searchState = useAppSelector((state) => state.global.searchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchValue(""));
    };
  }, []);

  return (
    <>
      <input
        className={"w-96 rounded-full bg-slate-100 px-4 py-2"}
        type="text"
        placeholder={"Look up apartments by name."}
        value={searchState}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />

      <button
        className={
          "xs:h-10 flex items-center gap-2 rounded-full bg-blue-400 px-4 py-2 text-white"
        }
      >
        <Image
          src={"/searchIcon.svg"}
          alt={"search"}
          width={18}
          height={18}
          className={"invert"}
        />
        <span className={"xs:hidden md:block"}>Search</span>
      </button>
    </>
  );
};
