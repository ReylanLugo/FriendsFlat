"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { hideToast } from "@/store/slices/toast";

export const Toast: React.FC = () => {
  const toastState = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideToast());
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [toastState.visible]);

  return (
    <>
      <div className={"fixed bottom-0 right-0 z-40 p-4"}>
        {toastState.visible && (
          <div
            className={
              "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            }
          >
            <div className={"p-4"}>
              <div className={"flex items-start"}>
                <div className={"flex-shrink-1"}>
                  <Image
                    src={
                      toastState.type === "success"
                        ? "/scIcon.svg"
                        : "/errIcon.png"
                    }
                    alt={""}
                    width={40}
                    height={40}
                  />
                </div>
                <div className={"ml-3 flex-1 pt-0.5"}>
                  <p className={"text-sm font-medium text-gray-900"}>
                    {toastState.title}
                  </p>
                  <p className={"mt-1 text-sm text-gray-500"}>
                    {toastState.message}
                  </p>
                </div>
                <div className={"ml-4 flex flex-shrink-0"}>
                  <button
                    className={
                      "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    }
                    onClick={() => dispatch(hideToast())}
                  >
                    <Image
                      src={"/closeIcon.png"}
                      alt={""}
                      width={14}
                      height={14}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
