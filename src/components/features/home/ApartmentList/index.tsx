"use client";
import React, { useEffect } from "react";
import { Apartment } from "@/components/common/Card/Apartment";
import { useAppDispatch } from "@/store/hooks";
import {
  apartmentListSelector,
  getAllApartment,
} from "@/store/slices/apartment";
import { useSelector } from "react-redux";

export const ApartmentList: React.FC = () => {
  const apartments = useSelector(apartmentListSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllApartment());
  }, []);

  return (
    <>
      <div
        className={
          "xs:grid-cols-1 xs:px-5 mt-8 grid h-full w-full gap-8 md:grid-cols-2 md:px-0 lg:grid-cols-3"
        }
      >
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
