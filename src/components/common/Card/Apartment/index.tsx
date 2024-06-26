"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/common/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSelectApartment,
  toggleApartmentDetails,
} from "@/store/slices/global";
import { ApartmentDetails } from "@/components/common/Modal/ApartmentDetails";
import { SetFavorite } from "@/actions";
import { toggleFavorites } from "@/store/slices/apartment";
import { showToast } from "@/store/slices/toast";
import { createClient } from "@/utils/supabase/client";

type props = {
  id: string;
  image: string;
  name: string;
  location: string;
  description: string;
  rooms: number;
  meters: number;
  price: number;
  favorited: boolean;
};

export const Apartment: React.FC<props> = ({
  id,
  image,
  name,
  location,
  description,
  rooms,
  meters,
  price,
  favorited,
}) => {
  const modalToggleState = useAppSelector(
    (state) => state.global.toggleApartmentDetails,
  );
  const selectedApartment = useAppSelector(
    (state) => state.global.selectApartment,
  );
  const dispatch = useAppDispatch();
  const session = createClient()
    .auth.getSession()
    .then((data) => data.data.session);

  function handleModal() {
    dispatch(setSelectApartment(id));
    dispatch(toggleApartmentDetails());
  }

  return (
    <>
      <Card onClick={handleModal}>
        <div className={"relative flex h-[220px]"}>
          <Image src={image} alt={"apartment"} fill />
          <div
            className={
              "absolute bottom-0 z-30 flex w-full items-center justify-between px-3 py-2"
            }
          >
            <span
              className={
                "h-fit rounded-full bg-white/80 px-3 py-1 text-base font-extrabold text-slate-500"
              }
            >
              $ {price.toLocaleString("en-US")}
            </span>
            <span
              onClick={async (e) => {
                e.stopPropagation();
                const session = await createClient().auth.getSession();
                if (!session.data.session) {
                  dispatch(
                    showToast({
                      type: "error",
                      message: "Please login",
                      title: "Error",
                    }),
                  );
                  return;
                }
                await SetFavorite(id);
                dispatch(toggleFavorites(id));
                dispatch(
                  showToast({
                    type: "success",
                    message: "Updated favorites status",
                    title: "Success",
                  }),
                );
              }}
              className={
                "rounded-full bg-white px-1 py-1 text-sm font-bold text-slate-500"
              }
            >
              <Image
                src={"/heartIcon.png"}
                alt={"heart"}
                height={30}
                width={30}
                className={`${favorited ? "" : "brightness-0"} hover:brightness-75`}
              />
            </span>
          </div>
        </div>
        <div className={"flex flex-col px-3 py-2"}>
          <span className={"text-xl"}>{name}</span>
          <span className={"text-sm text-slate-400"}>{location}</span>
          <p className={"text-sm"}>{description}</p>
          <div className={"my-3 flex items-center gap-6"}>
            <span className={"flex items-center gap-2"}>
              <Image
                src={"/roomsIcon.png"}
                alt={"rooms"}
                width={27}
                height={27}
              />
              {rooms}
            </span>
            <span className={"flex items-center gap-2 text-sm"}>
              <Image
                src={"/metersIcon.png"}
                alt={"rooms"}
                width={27}
                height={27}
              />
              {meters} mts.
            </span>
          </div>
        </div>
      </Card>
      {modalToggleState && selectedApartment === id && (
        <ApartmentDetails apartmentId={id} />
      )}
    </>
  );
};
