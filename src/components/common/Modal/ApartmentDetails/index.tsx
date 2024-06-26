import React, { useEffect } from "react";
import { Modal } from "@/components/common/Modal";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleApartmentDetails } from "@/store/slices/global";
import { getAllRooms } from "@/store/slices/room";
import { Room } from "@/components/common/Card/Room";

type Props = {
  apartmentId: string;
};

export const ApartmentDetails: React.FC<Props> = ({ apartmentId }) => {
  const dispatch = useAppDispatch();
  const apartmentState = useAppSelector((state) =>
    state.apartmentForm.allApartments.find((flat) => flat.id === apartmentId),
  );
  const roomsListState = useAppSelector((state) => state.roomForm.roomList);

  useEffect(() => {
    dispatch(getAllRooms({ apartmentId }));
  }, [apartmentId]);

  return (
    <>
      <Modal>
        <div className={"w-[40em] rounded-lg bg-white p-4 shadow"}>
          <div className={"flex w-full justify-between"}>
            <span className={"text-2xl font-extrabold"}>
              {apartmentState?.name}
            </span>
            <button
              onClick={() => dispatch(toggleApartmentDetails())}
              className={"cursor-pointer"}
            >
              <Image
                src={"/closeIcon.png"}
                alt={"close"}
                width={22}
                height={22}
              />
            </button>
          </div>

          <div className={"flex w-full gap-3"}>
            <span className={"text-xl font-bold text-blue-500"}>
              $ {apartmentState?.price.toLocaleString("en-US")}
            </span>
            <span className={"flex items-center gap-2 text-slate-500"}>
              <Image
                src={"/roomsIcon.png"}
                alt={"rooms"}
                width={27}
                height={27}
              />
              {apartmentState?.rooms}
            </span>
            <span className={"flex items-center gap-2 text-sm text-slate-500"}>
              <Image
                src={"/metersIcon.png"}
                alt={"rooms"}
                width={27}
                height={27}
              />
              {apartmentState?.meters} mts.
            </span>
          </div>

          <p className={"my-3 leading-tight"}>{apartmentState?.description}</p>

          <span className={"text-xl font-extrabold"}>Rooms</span>
          <div
            className={
              "flex flex-nowrap items-center gap-4 overflow-x-auto rounded-xl bg-slate-200 p-4"
            }
          >
            {roomsListState.length === 0 || roomsListState[0].id === "" ? (
              <span>No rooms available for this apartment.</span>
            ) : (
              roomsListState.map((room) => <Room key={room.id} {...room} />)
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
