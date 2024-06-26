import Image from "next/image";
import { TypeWritting } from "@/components/features/home/TypeWritting";
import { SearchByName } from "@/components/common/Forms/SearchByName/SearchByName";
import { Filters } from "@/components/features/home/Filters";
import { ApartmentList } from "@/components/features/home/ApartmentList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 px-16 py-12">
      <div className={"relative flex w-full justify-between"}>
        <TypeWritting />
        <Image
          src={"/isometricAparment.png"}
          alt={"apartment"}
          width={400}
          height={305}
          className={"absolute -top-12 right-0"}
        />
      </div>
      <div className={"mt-8 flex items-center gap-6"}>
        <SearchByName />
      </div>
      <div className={"mt-4 flex gap-6"}>
        <Filters />
      </div>
      <ApartmentList />
    </main>
  );
}
