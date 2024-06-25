import React from "react";
import Image from "next/image";
import { SearchByName } from "@/components/common/Forms/SearchByName/SearchByName";
import { Apartment } from "@/components/common/Card/Apartment";
import { createClient } from "@/utils/supabase/server";

export default async function MyApartments() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 px-16 py-12">
      <div className={"relative flex w-full justify-between"}>
        <span className={"flex w-6/12 flex-col gap-4"}>
          <h4 className={"text-5xl"}>
            Rent out your apartments and gain benefits.
            {data.user?.id}
          </h4>
          <span>
            Rent out your apartments and start earning extra income. Benefit
            from a steady revenue stream while making the most of your property.
            Enjoy the financial rewards and the flexibility that comes with
            renting your space.
          </span>
          <div className={"flex justify-between gap-3"}>
            <button className={"rounded-full bg-blue-600 px-4 py-2 text-white"}>
              Learn More
            </button>

            <button
              className={"rounded-full bg-green-600 px-4 py-2 text-white"}
            >
              Add Property
            </button>
          </div>
          <div className={"mt-3 flex items-center gap-3"}>
            <SearchByName />
          </div>
        </span>
        <Image
          src={"/benefits.svg"}
          alt={"benefits"}
          width={360}
          height={305}
          className={"absolute -top-8 right-0"}
        />
      </div>
      <div className={"mt-10 grid h-full w-full grid-cols-3 gap-8"}>
        <Apartment
          id={1}
          image={"/apartment.png"}
          name={"Orange Park PRoxi"}
          location={"New York 834et Apt 2"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          rooms={4}
          meters={231}
          price={1311}
          favorited={false}
        />
      </div>
    </main>
  );
}
