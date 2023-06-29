"use client";
import { SliderDemo } from "@/components/sliderthing";
import { useState } from "react";

const jurtProps = [
  {
    val: 5,
    desc: "h",
  },
  {
    val: 10,
    desc: "h",
  },
  {
    val: 15,
    desc: "h",
  },
];

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState([0]);
  const [jurttynBalasy, setJurttynBalasy] = useState("");
  function handleChangeSlider(val: number[]) {
    setSliderValue(val);
    handleBala(val);
  }
  function handleBala(val: number[]) {
    const matchingProp = jurtProps.find((prop) => prop.val === val[0]);
    if (matchingProp) {
      setJurttynBalasy(matchingProp.desc);
    } else {
      setJurttynBalasy("");
    }
  }

  return (
    <div>
      <div className="flex items-center flex-col gap-4">
        {sliderValue}
        <SliderDemo
          defaultValue={[0]}
          onValueChange={handleChangeSlider}
        />
        {jurttynBalasy}
      </div>
    </div>
  );
}
