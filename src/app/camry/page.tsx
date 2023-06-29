"use client";
import CamryCounter from "@/components/camry-counter";
import { GoodsSelect } from "@/components/goods-select";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import goods from "@/data/goods";
import Link from "next/link";
import { useState } from "react";

export default function CamryPage() {
  const [selectedPrice, setSelectedPrice] = useState(0);

  const camryPrice = 13_700_000;

  // Function to handle the selection of goods
  const handleSelectGoods = (item: number) => {
    setSelectedPrice(item);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full md:max-w-xl flex flex-col gap-4">
        <h1 className="font-black text-3xl">Бұл қанша Camry тұрады?</h1>
        <GoodsSelect
          goods={goods}
          onSelect={handleSelectGoods}
        />
      </div>

      {selectedPrice > 0 && (
        <>
          <h1 className="font-medium text-2xl">
            Бұл зат{" "}
            <span className="font-bold">
              {(selectedPrice / camryPrice).toFixed(5)}
            </span>{" "}
            Camry-ға тең
          </h1>
          <h1 className="font-medium text-2xl">
            1 Camry орнына бұл затты{" "}
            <span className="font-bold">
              {(camryPrice / selectedPrice).toFixed(2)}
            </span>{" "}
            рет алуға болады
          </h1>
          <Separator />
        </>
      )}

      <div className="w-full">
        <CamryCounter number={selectedPrice / camryPrice} />
      </div>
      <div className="w-full md:max-w-lg flex flex-col gap-4 ">
        <Separator />
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="https://www.toyotakz.com/new-cars/camry/overview.CAMRY.040.68734c35-c918-4b76-bb26-7ba40686d740"
        >
          Референс Камри
        </Link>
      </div>
    </div>
  );
}
