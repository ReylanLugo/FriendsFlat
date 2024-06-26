import React from "react";
import { Card } from "@/components/common/Card";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSelectApartment, toggleNewRoom } from "@/store/slices/global";
import { useAppSelector } from "@/store/hooks";
import { NewRoom } from "@/components/common/Modal/NewRoom";
import { DeleteApartment } from "@/actions";

type Props = {
  id: string;
  image: string;
  name: string;
  location: string;
  rooms: number;
  meters: number;
  price: number;
};

export const MyApartment: React.FC<Props> = ({
  id,
  image,
  name,
  location,
  rooms,
  meters,
  price,
}) => {
  const dispatch = useDispatch();
  const toggleModalState = useAppSelector(
    (state) => state.global.toggleNewRoom,
  );
  const selectApartment = useAppSelector(
    (state) => state.global.selectApartment,
  );

  function handleModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    dispatch(setSelectApartment(id));
    dispatch(toggleNewRoom());
  }

  return (
    <>
      <Card>
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
          </div>
        </div>
        <div className={"flex flex-col px-3 py-2"}>
          <span className={"text-xl"}>{name}</span>
          <span className={"text-sm text-slate-400"}>{location}</span>
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
          <div className={"my-3 flex justify-between text-sm"}>
            <button
              onClick={() => DeleteApartment(id)}
              className={"rounded-full px-3 py-1 text-red-500"}
            >
              Delete
            </button>
            <button
              onClick={handleModal}
              className={"rounded-full bg-green-500 px-3 py-1 text-white"}
            >
              Add Room
            </button>
          </div>
        </div>
      </Card>
      {toggleModalState && selectApartment === id && (
        <NewRoom apartmentId={id} />
      )}
    </>
  );
};
