"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAllMyApartment } from "@/store/slices/apartment";
import { MyApartment } from "@/components/common/Card/MyApartment";

export const ApartmentList: React.FC = () => {
  const dispatch = useAppDispatch();
  const myApartments = useAppSelector(
    (state) => state.apartmentForm.myApartments,
  );
  useEffect(() => {
    dispatch(getAllMyApartment());
  }, []);

  return (
    <div className={"mt-10 grid h-full w-full grid-cols-3 gap-8"}>
      {myApartments?.map((apartment) => (
        <MyApartment
          key={apartment.id}
          id={apartment.id}
          image={apartment.images}
          name={apartment.name}
          location={apartment.location}
          rooms={apartment.rooms}
          meters={apartment.meters}
          price={apartment.price}
        />
      ))}
    </div>
  );
};
