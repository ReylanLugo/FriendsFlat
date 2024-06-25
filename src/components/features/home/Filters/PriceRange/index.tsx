import React from "react";

export const PriceRange: React.FC = () => {
  return (
    <>
      <span className={"text-sm"}>Price range</span>
      <div className={"flex items-center gap-2"}>
        <div className={"flex gap-2 rounded-full bg-slate-100 px-4 py-2"}>
          <span>$</span>
          <input type={"number"} className={"w-24 bg-transparent"} />
        </div>

        <div className={"flex gap-2 rounded-full bg-slate-100 px-4 py-2"}>
          <span>$</span>
          <input type={"number"} className={"w-24 bg-transparent"} />
        </div>
      </div>
    </>
  );
};
