import React from "react";
import { Modal } from "@/components/common/Modal";
import { toggleNewRoom } from "@/store/slices/global";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AddRoom } from "@/actions";
import { useAppSelector } from "@/store/hooks";
import { setEquipment, setImage, setName, setSize } from "@/store/slices/room";
import { addNewRoom, resetRoomForm } from "@/store/slices/apartment";

type Props = {
  apartmentId: string;
};

export const NewRoom: React.FC<Props> = ({ apartmentId }) => {
  const dispatch = useDispatch();
  const RoomFormState = useAppSelector((state) => state.roomForm);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const img = document.getElementById("image") as HTMLInputElement;
    const file = img.files && img.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("name", RoomFormState.name);
    formData.append("size", RoomFormState.size.toString());
    formData.append("equipment", RoomFormState.equipment);
    formData.append("apartmentId", apartmentId);
    formData.append("image", file);
    const result = await AddRoom(formData);
    if (result.success) {
      dispatch(addNewRoom({ apartmentId, meters: RoomFormState.size }));
      dispatch(resetRoomForm());
      dispatch(toggleNewRoom());
    }
  };

  return (
    <>
      <Modal>
        <form
          onSubmit={submitHandler}
          className={
            "xs:grid xs:mx-4 rounded-xl bg-white p-4 shadow shadow-slate-300 md:w-2/3 lg:w-1/3"
          }
        >
          <div className={"flex w-full justify-between"}>
            <span className={"text-2xl font-extrabold"}>New Room</span>
            <button
              onClick={() => dispatch(toggleNewRoom())}
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

          <div className={"mt-2 flex items-center gap-3"}>
            <div className={"flex w-full flex-col gap-1"}>
              <label className={"text-sm"} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={
                  "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                }
                placeholder={"Room Name"}
                required={true}
                value={RoomFormState.name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            <div className={"flex flex-col gap-1"}>
              <label className={"text-sm"} htmlFor="size">
                Size
              </label>
              <input
                type="number"
                id="size"
                name="size"
                className={
                  "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                }
                placeholder={"In meters"}
                required={true}
                value={RoomFormState.size}
                onChange={(e) => dispatch(setSize(e.target.value))}
              />
            </div>
          </div>

          <label htmlFor={"equipment"} className={"mt-3 block"}>
            Equipment
          </label>
          <textarea
            id={"equipment"}
            name={"equipment"}
            className={
              "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            }
            placeholder={"Equipment"}
            required={true}
            value={RoomFormState.equipment}
            onChange={(e) => dispatch(setEquipment(e.target.value))}
          />

          <label className={"mt-3 block"} htmlFor={"image"}>
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className={
              "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            }
            placeholder={"Image"}
            onChange={(e) => {
              if (e.target.files) {
                const url = URL.createObjectURL(e.target.files[0]);
                dispatch(setImage(url));
              }
            }}
          />

          <div className={"mt-3 flex w-full justify-end"}>
            <button
              formAction={AddRoom}
              className={
                "cursor-pointer rounded-xl bg-green-500 px-4 py-2 text-sm text-white"
              }
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
