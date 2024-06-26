import React from "react";
import Image from "next/image";
import { ApartmentList } from "@/components/features/favorites/ApartmentList";
import { GetUserSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Favorites() {
  const session = await GetUserSession();
  if (!session) {
    return redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 py-12 xs:px-5 md:px-16">
      <div className={"relative flex w-full justify-between"}>
        <span className={"flex flex-col gap-4 xs:w-full lg:w-6/12"}>
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
        </span>
        <Image
          src={"/roomMates.png"}
          alt={"room mates"}
          width={470}
          height={363.52}
          className={"absolute -top-8 right-0 rounded-xl xs:hidden lg:block"}
        />
      </div>
      <ApartmentList />
    </main>
  );
}
