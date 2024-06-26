"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export const TypeWritting: React.FC = () => {
  return (
    <>
      <h4
        className={
          "xs:bg-white/90 xs:text-3xl xs:px-3 xs:py-2 xs:mt-24 xs:ml-6 z-20 rounded-xl sm:bg-transparent sm:p-0 sm:text-5xl md:m-0 md:flex md:flex-col md:justify-center"
        }
      >
        Discover your next
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(" Apartment");
            typewriter.pauseFor(1000);
            typewriter.deleteAll();
            typewriter.typeString(" Room");
            typewriter.pauseFor(1000);
            typewriter.deleteAll();
            typewriter.typeString(" Circle of friends");
            typewriter.pauseFor(1000);
            typewriter.deleteAll();
            typewriter.typeString(" Flat");
            typewriter.pauseFor(1000);
            typewriter.start();
          }}
          options={{ loop: true }}
        />
      </h4>
    </>
  );
};
