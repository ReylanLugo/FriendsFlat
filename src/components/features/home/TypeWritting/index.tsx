"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export const TypeWritting: React.FC = () => {
  return (
    <>
      <h4 className={"text-5xl"}>
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
