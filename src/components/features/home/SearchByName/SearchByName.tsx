import React from "react";
import Image from "next/image";

export const SearchByName: React.FC = () => {
  return (
    <>
      <input
        className={"w-96 rounded-full bg-slate-100 px-4 py-2"}
        type="text"
        placeholder={"Look up apartments by name."}
      />

      <button
        className={
          "flex items-center gap-2 rounded-full bg-blue-400 px-4 py-2 text-white"
        }
      >
        <Image
          src={"/searchIcon.svg"}
          alt={"search"}
          width={18}
          height={18}
          className={"invert"}
        />
        Search
      </button>
    </>
  );
};
