import Image from "next/image";
import { Card } from "@/components/common/Card";
import React from "react";

type Props = {
  id: string;
  name: string;
  image: string;
  size: number;
  equipment: string;
};

export const Room: React.FC<Props> = ({ id, name, image, size, equipment }) => {
  return (
    <>
      <Card key={id} className={"w-[240px] flex-none"}>
        <Image src={image} alt={"apartment"} width={240} height={135.94} />
        <div className={"overflow-hidden px-3 py-2"}>
          <div className={"flex items-center justify-between"}>
            <span className={"text-lg text-slate-500"}>{name}</span>
            <span className={"text-sm"}>{size} mts.</span>
          </div>
          <p
            className={
              "h-[7.5em] w-[15.4em] overflow-hidden text-ellipsis text-sm"
            }
          >
            {equipment}
          </p>
        </div>
      </Card>
    </>
  );
};
