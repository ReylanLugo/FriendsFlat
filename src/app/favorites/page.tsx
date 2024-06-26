import { SearchByName } from "@/components/common/Forms/SearchByName/SearchByName";
import React from "react";
import Image from "next/image";
import { ApartmentList } from "@/components/features/favorites/ApartmentList";

export default function Favorites() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 px-16 py-12">
      <div className={"relative flex w-full justify-between"}>
        <span className={"flex w-6/12 flex-col gap-4"}>
          <h4 className={"text-5xl"}>
            Discover Your Ideal Home Among Top Picks.
          </h4>
          <span>
            Explore a curated list of the best apartments, perfect for your new
            home. Enjoy the community with wonderful neighbors who could become
            new friends. Find your dream living space with quality surroundings
            and excellent amenities. Start your journey to a new, vibrant
            neighborhood today.
          </span>
          <div className={"mt-3 flex items-center gap-3"}>
            <SearchByName />
          </div>
        </span>
        <Image
          src={"/roomMates.png"}
          alt={"room mates"}
          width={470}
          height={363.52}
          className={"absolute -top-8 right-0 rounded-xl"}
        />
      </div>
      <ApartmentList />
    </main>
  );
}
