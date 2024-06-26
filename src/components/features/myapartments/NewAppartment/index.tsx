"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleNewApartment } from "@/store/slices/global";
import { ApartmentForm } from "@/components/common/Modal/ApartmentForm";

export const NewAppartment = () => {
  const modalToggleState = useAppSelector(
    (state) => state.global.toggleNewApartment,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(toggleNewApartment())}
        className={"rounded-full bg-green-600 px-4 py-2 text-white"}
      >
        Add Property
      </button>
      {modalToggleState && <ApartmentForm />}
    </>
  );
};
