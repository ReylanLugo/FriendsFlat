import React from "react";
import { Modal } from "@/components/common/Modal";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setDescription,
  setImage,
  setLocation,
  setName,
  setPrice,
} from "@/store/slices/apartment";
import { CreateNewApartment } from "@/actions";
import { toggleNewApartment } from "@/store/slices/global";

export const ApartmentForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const apartmentFormState = useAppSelector((state) => state.apartmentForm);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const img = document.getElementById("image") as HTMLInputElement;
    const file = img.files && img.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("name", apartmentFormState.name);
    formData.append("location", apartmentFormState.location);
    formData.append("price", apartmentFormState.price.toString());
    formData.append("description", apartmentFormState.description);
    formData.append("image", file);
    const result = await CreateNewApartment(formData);
    if (result.success) {
      dispatch(toggleNewApartment());
    }
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      const url = URL.createObjectURL(files[0]);
      dispatch(setImage(url));
    } else {
      switch (name) {
        case "name":
          dispatch(setName(value));
          break;
        case "location":
          dispatch(setLocation(value));
          break;
        case "price":
          dispatch(setPrice(value));
          break;
        case "description":
          dispatch(setDescription(value));
          break;
        default:
          break;
      }
    }
  };

  return (
    <Modal>
      <div
        className={"rounded-xl bg-white p-4 shadow shadow-slate-300 md:w-1/3"}
      >
        <div className={"flex w-full justify-between"}>
          <span className={"text-2xl font-extrabold"}>New Property</span>
          <button
            onClick={() => dispatch(toggleNewApartment())}
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

        <form onSubmit={submitHandler} className={"mt-3 flex w-full flex-col"}>
          <label className={"text-sm"} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name={"name"}
            onChange={handleChange}
            value={apartmentFormState.name}
            className={
              "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            }
            placeholder={"Property Name"}
            required={true}
          />

          <div className={"mt-3 flex w-full gap-4"}>
            <div className={"w-6/12"}>
              <label className={"text-sm"} htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name={"location"}
                onChange={handleChange}
                value={apartmentFormState.location}
                className={
                  "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                }
                placeholder={"New York, Stree 823 evt."}
                required={true}
              />
            </div>
            <div className={"w-6/12"}>
              <label className={"text-sm"} htmlFor="price">
                Price
              </label>
              <input
                type="number"
                id="price"
                name={"price"}
                onChange={handleChange}
                value={apartmentFormState.price}
                className={
                  "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                }
                placeholder={"New York, Stree 823 evt."}
                required={true}
              />
            </div>
          </div>

          <label className={"mt-3 text-sm"} htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name={"description"}
            onChange={handleChange}
            value={apartmentFormState.description}
            className={
              "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            }
            placeholder={"A nice apartment in new york of the cirty protected"}
            required={true}
          />

          <label className={"mt-3 text-sm"} htmlFor="Image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name={"image"}
            onChange={handleChange}
            className={
              "mt-1 block w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            }
            required={true}
          />
          <div className={"mt-3 flex justify-end"}>
            <button
              className={
                "cursor-pointer rounded-xl bg-green-600 px-4 py-2 text-sm text-white"
              }
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
