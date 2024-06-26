import React from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { NewAppartment } from "@/components/features/myapartments/NewAppartment";
import { ApartmentList } from "@/components/features/myapartments/ApartmentList";
import { GetUserSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function MyApartments() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  const session = await GetUserSession();
  if (!session) {
    return redirect("/login");
  }

  return (
    <main className="xs:px-5 flex min-h-screen flex-col bg-slate-50 py-12 md:px-16">
      <div className={"relative flex w-full justify-between"}>
        <span className={"flex flex-col gap-4 md:w-full lg:w-6/12"}>
          <h4 className={"text-5xl"}>
            Rent out your apartments and gain benefits.
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

            <NewAppartment />
          </div>
        </span>
        <Image
          src={"/benefits.svg"}
          alt={"benefits"}
          width={360}
          height={305}
          className={"xs:hidden absolute -top-8 right-0 lg:block"}
        />
      </div>
      <ApartmentList />
    </main>
  );
}
