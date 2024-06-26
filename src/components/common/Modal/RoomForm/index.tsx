import React from "react";
import { useAppDispatch } from "@/store/hooks";
import { setImage, setName, setSize } from "@/store/slices/room";

export const RoomForm: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => dispatch(setName(e.target.value))}
        className={
          "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
        }
        placeholder={"Room Name"}
      />
      <label htmlFor="size" className={"mt-3"}>
        Size
      </label>
      <input
        type="number"
        onChange={(e) => dispatch(setSize(e.target.value))}
        id="size"
        className={
          "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
        }
        placeholder={"Room Size"}
      />

      <label htmlFor="image" className={"mt-3"}>
        Image
      </label>
      <input
        type="file"
        id="image"
        onChange={(e) => {
          if (e.target.files) {
            dispatch(setImage(e.target.files[0]));
          }
        }}
        className={
          "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
        }
      />

      <label htmlFor="price" className={"mt-3"}>
        Equipment
      </label>
      <textarea
        id="price"
        className={
          "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
        }
        placeholder={"Room Price"}
      />
    </div>
  );
};
