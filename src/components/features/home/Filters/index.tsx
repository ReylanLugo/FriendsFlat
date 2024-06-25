import React from "react";
import Image from "next/image";
import { PriceRange } from "@/components/features/home/Filters/PriceRange";
import { MetersRange } from "@/components/features/home/Filters/MetersRange";

export const Filters: React.FC = () => {
  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <PriceRange />
      </div>
      <div className={"flex flex-col gap-2"}>
        <MetersRange />
      </div>
      <button
        className={
          "flex h-10 items-center gap-2 self-end rounded-full bg-slate-800 px-4 py-2 text-white"
        }
      >
        <Image
          src={"/filterIcon.png"}
          alt={"filter"}
          width={18}
          height={18}
          className={"invert"}
        />
        Apply Filters
      </button>
    </>
  );
};
