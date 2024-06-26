"use client";
import React, { useEffect } from "react";
import { Apartment } from "@/components/common/Card/Apartment";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAllApartment } from "@/store/slices/apartment";

export const ApartmentList: React.FC = () => {
  const apartments = useAppSelector(
    (state) => state.apartmentForm.allApartments,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllApartment());
  }, []);

  return (
    <>
      <div className={"mt-8 grid h-full w-full grid-cols-3 gap-8"}>
        {apartments.length === 0 || apartments[0].id === "" ? (
          <span>No apartments available</span>
        ) : (
          apartments.map((apartment) => (
            <Apartment
              key={apartment.id}
              id={apartment.id}
              image={apartment.images}
              name={apartment.name}
              location={apartment.location}
              description={apartment.description}
              rooms={apartment.rooms}
              meters={apartment.meters}
              price={apartment.price}
              favorited={apartment.favorited}
            />
          ))
        )}
      </div>
    </>
  );
};
