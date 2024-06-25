import React from "react";
import { Modal } from "@/components/common/Modal";
import Image from "next/image";
import { Card } from "@/components/common/Card";
import { useAppDispatch } from "@/store/hooks";
import { toggleApartmentDetails } from "@/store/slices/global";

export const ApartmentDetails: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Modal>
        <div className={"w-[40em] rounded-lg bg-white p-4 shadow"}>
          <div className={"flex w-full justify-between"}>
            <span className={"text-2xl font-extrabold"}>Orange Park PRoxi</span>
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
            <span className={"text-xl font-bold text-blue-500"}>$ 1,311</span>
            <span className={"flex items-center gap-2 text-slate-500"}>
              <Image
                src={"/roomsIcon.png"}
                alt={"rooms"}
                width={27}
                height={27}
              />
              {4}
            </span>
            <span className={"flex items-center gap-2 text-sm text-slate-500"}>
              <Image
                src={"/metersIcon.png"}
                alt={"rooms"}
                width={27}
                height={27}
              />
              {444} mts.
            </span>
          </div>

          <p className={"my-3 leading-tight"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <span className={"text-xl font-extrabold"}>Rooms</span>
          <div
            className={
              "flex flex-nowrap items-center gap-4 overflow-x-auto rounded-xl bg-slate-200 p-4"
            }
          >
            <Card className={"w-[240px] flex-none"}>
              <Image
                src={"/apartment.png"}
                alt={"apartment"}
                width={240}
                height={135.94}
              />
              <div className={"overflow-hidden px-3 py-2"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"text-lg text-slate-500"}>Bedroom</span>
                  <span className={"text-sm"}>40 mts.</span>
                </div>
                <p
                  className={
                    "h-[7.5em] w-[15.4em] overflow-hidden text-ellipsis text-sm"
                  }
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Modal>
    </>
  );
};
