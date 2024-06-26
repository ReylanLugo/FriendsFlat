import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMaxPrice, setMinPrice } from "@/store/slices/global";

export const PriceRange: React.FC = () => {
  const globalState = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className={"text-sm"}>Price range</span>
      <div className={"flex items-center gap-2"}>
        <div className={"flex gap-2 rounded-full bg-slate-100 px-4 py-2"}>
          <span>$</span>
          <input
            value={globalState.minPrice}
            onChange={(e) => {
              dispatch(setMinPrice(parseInt(e.target.value)));
            }}
            type={"number"}
            className={"w-24 bg-transparent"}
          />
        </div>

        <div className={"flex gap-2 rounded-full bg-slate-100 px-4 py-2"}>
          <span>$</span>
          <input
            value={globalState.maxPrice}
            onChange={(e) => {
              dispatch(setMaxPrice(parseInt(e.target.value)));
            }}
            type={"number"}
            className={"w-24 bg-transparent"}
          />
        </div>
      </div>
    </>
  );
};
