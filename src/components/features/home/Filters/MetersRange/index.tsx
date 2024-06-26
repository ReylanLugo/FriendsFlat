import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMaxSize, setMinSize } from "@/store/slices/global";

export const MetersRange: React.FC = () => {
  const globalState = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className={"text-sm"}>Meters range</span>
      <div className={"flex items-center gap-2"}>
        <div className={"flex gap-2 rounded-full bg-slate-100 px-4 py-2"}>
          <span>Min</span>
          <input
            value={globalState.minSize}
            onChange={(e) => {
              dispatch(setMinSize(parseInt(e.target.value)));
            }}
            type={"number"}
            className={"w-24 bg-transparent"}
          />
        </div>

        <div className={"flex gap-2 rounded-full bg-slate-100 px-4 py-2"}>
          <span>Max</span>
          <input
            value={globalState.maxSize}
            onChange={(e) => {
              dispatch(setMaxSize(parseInt(e.target.value)));
            }}
            type={"number"}
            className={"w-24 bg-transparent"}
          />
        </div>
      </div>
    </>
  );
};
