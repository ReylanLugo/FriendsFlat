"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProfileMenu } from "@/components/features/navbar/ProfileMenu";
import { toggleMenu, toggleProfile } from "@/store/slices/global";

export const ProfileUser: React.FC = () => {
  const globalState = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  function toggle() {
    if (globalState.toggleMenu) {
      console.log("toggle");
      dispatch(toggleMenu());
    }
    dispatch(toggleProfile());
  }

  return (
    <>
      <a className={"relative"}>
        <Image
          onClick={toggle}
          src={"/defaultProfileImg.png"}
          alt={"profile"}
          width={40}
          height={40}
          className={"cursor-pointer rounded-full"}
        />
        {globalState.toggleProfile && <ProfileMenu />}
      </a>
    </>
  );
};
