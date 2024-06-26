"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProfileMenu } from "@/components/features/navbar/ProfileMenu";
import { toggleProfile } from "@/store/slices/global";

export const ProfileUser: React.FC = () => {
  const toggleProfileState = useAppSelector(
    (state) => state.global.toggleProfile,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <a className={"relative"}>
        <Image
          onClick={() => dispatch(toggleProfile())}
          src={"/defaultProfileImg.png"}
          alt={"profile"}
          width={40}
          height={40}
          className={"cursor-pointer rounded-full"}
        />
        {toggleProfileState && <ProfileMenu />}
      </a>
    </>
  );
};
