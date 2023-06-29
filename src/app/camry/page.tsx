"use client";
import CamryCounter from "@/components/camry-counter";
import { GoodsSelect } from "@/components/goods-select";
import goods from "@/data/goods";
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
      <GoodsSelect
        goods={goods}
        onSelect={handleSelectGoods}
      />

      {selectedPrice && (
        <h1 className="font-bold text-2xl">
          {selectedPrice / camryPrice} Camry
        </h1>
      )}

      <div className="w-full    ">
        <CamryCounter number={selectedPrice / camryPrice} />
      </div>
    </div>
  );
}
