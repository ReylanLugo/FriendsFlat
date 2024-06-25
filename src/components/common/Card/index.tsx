import React from "react";

type props = {
  children: React.ReactNode;
};

export const Card: React.FC<props> = ({ children }) => {
  return (
    <div
      className={
        "flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow shadow-slate-300"
      }
    >
      {children}
    </div>
  );
};
