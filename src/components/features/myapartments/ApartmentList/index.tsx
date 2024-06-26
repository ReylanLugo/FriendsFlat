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
    <div
      className={
        "xs:grid-cols-1 mt-20 grid h-full w-full gap-8 md:grid-cols-2 xl:grid-cols-3"
      }
    >
      {myApartments.length === 0 || myApartments[0].id === "" ? (
        <span>You don`t have any apartment.</span>
      ) : (
        myApartments?.map((apartment) => (
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
        ))
      )}
    </div>
  );
};
