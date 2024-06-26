"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Apartment } from "@/components/common/Card/Apartment";
import { getAllFavoritesApartment } from "@/store/slices/apartment";

export const ApartmentList: React.FC = () => {
  const apartments = useAppSelector((state) =>
    state.apartmentForm.allApartments.filter((apartment) => {
      return apartment.favorited;
    }),
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFavoritesApartment());
  }, []);

  return (
    <div
      className={
        "xs:grid-cols-1 mt-10 grid h-full w-full gap-8 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      {!apartments || apartments.length === 0 || apartments[0].id === "" ? (
        <span>You don`t have any apartment.</span>
      ) : (
        apartments?.map((apartment) => (
          <Apartment
            id={apartment.id}
            key={apartment.id}
            image={apartment.images}
            name={apartment.name}
            location={apartment.name}
            description={apartment.description}
            rooms={apartment.rooms}
            meters={apartment.meters}
            price={apartment.price}
            favorited={apartment.favorited}
          />
        ))
      )}
    </div>
  );
};
