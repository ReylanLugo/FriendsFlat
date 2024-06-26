"use client";
import React from "react";
import Image from "next/image";
import { PriceRange } from "@/components/features/home/Filters/PriceRange";
import { MetersRange } from "@/components/features/home/Filters/MetersRange";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAllApartmentWithFilter } from "@/store/slices/apartment";
import { showToast } from "@/store/slices/toast";

export const Filters: React.FC = () => {
  const globalState = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={"xs:w-full flex flex-col gap-2 md:w-auto"}>
        <PriceRange />
      </div>
      <div className={"xs:w-full flex flex-col gap-2 md:w-auto"}>
        <MetersRange />
      </div>
      <button
        onClick={(e) => {
          dispatch(
            getAllApartmentWithFilter({
              minPrice: globalState.minPrice,
              maxPrice: globalState.maxPrice,
              minSize: globalState.minSize,
              maxSize: globalState.maxSize,
            }),
          );
          dispatch(
            showToast({
              message: "List of flats updated",
              type: "success",
              title: "Filters applied",
            }),
          );
        }}
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
