import React from "react";

type props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Card: React.FC<props> = ({ children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow shadow-slate-300" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};
