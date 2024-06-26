import Image from "next/image";
import { TypeWritting } from "@/components/features/home/TypeWritting";
import { SearchByName } from "@/components/common/Forms/SearchByName/SearchByName";
import { Filters } from "@/components/features/home/Filters";
import { ApartmentList } from "@/components/features/home/ApartmentList";

export default function Home() {
  return (
    <main className="xs:px-5 xs:py-6 flex min-h-screen flex-col bg-slate-50 py-16 md:px-8">
      <div className={"relative flex w-full justify-between"}>
        <TypeWritting />
        <Image
          src={"/isometricAparment.png"}
          alt={"apartment"}
          width={400}
          height={305}
          className={
            "absolute right-0 sm:relative sm:-top-6 sm:block lg:absolute lg:-top-12"
          }
        />
      </div>
      <div
        className={
          "xs:mt-32 xs:gap-2 flex items-center md:mt-3 md:gap-6 lg:mt-14"
        }
      >
        <SearchByName />
      </div>
      <div className={"mt-4 flex flex-wrap gap-6 lg:mt-12"}>
        <Filters />
      </div>
      <ApartmentList />
    </main>
  );
}
