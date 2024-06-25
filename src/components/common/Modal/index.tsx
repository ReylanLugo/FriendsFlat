import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div
        className={
          "fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black/50"
        }
      >
        {children}
      </div>
    </>
  );
};
