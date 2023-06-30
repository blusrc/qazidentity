"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import layer from "@/data/starter-data";
import Image from "next/image";
import { useState } from "react";

export default function QuizComponent({ options }: { options: typeof layer }) {
  const [l1, setL1] = useState(-1);
  const [l2, setL2] = useState(-1);
  const [l3, setL3] = useState(-1);
  const [l4, setL4] = useState(-1);

  const [images, setImages] = useState([""]);
  return (
    <>
      <div className="flex flex-col gap-2">
        {/* {`. ${l4} ${l3} ${l2} ${l1}`} */}
        <div className="flex gap-4">
          {options.map((e, i) => (
            <Card
              key={e.option}
              onClick={() => {
                if (l1 === -1) {
                  setL1(i);
                  setImages([e.img]);
                }
              }}
              className={l1 === -1 ? `hover:bg-slate-200` : "bg-slate-100"}
            >
              <CardHeader>
                <CardTitle>{e.option}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        {l1 >= 0 && (
          <div className="flex gap-4">
            {options[l1].ops.map((e, i) => (
              <Card
                key={e.option}
                onClick={() => {
                  if (l2 === -1) {
                    setL2(i);
                    setImages((prev) => [...prev, e.img]);
                  }
                }}
                className={l2 === -1 ? `hover:bg-slate-200` : "bg-slate-100"}
              >
                <CardHeader>
                  <CardTitle>{e.option}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
        {l2 >= 0 && (
          <div className="flex gap-4">
            {options[l1].ops[l2].ops.map((e, i) => (
              <Card
                key={e.option}
                onClick={() => {
                  if (l3 === -1) {
                    setL3(i);
                    setImages((prev) => [...prev, e.img]);
                  }
                }}
                className={l3 === -1 ? `hover:bg-slate-200` : "bg-slate-100"}
              >
                <CardHeader>
                  <CardTitle>{e.option}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
        {l3 >= 0 && (
          <div className="flex gap-4">
            {options[l1].ops[l2].ops[l3].ops.map((e, i) => (
              <Card
                key={e.option}
                onClick={() => {
                  if (l4 === -1) {
                    setL4(i);
                    setImages((prev) => [...prev, e.img]);
                  }
                }}
                className={l4 === -1 ? `hover:bg-slate-200` : "bg-slate-100"}
              >
                <CardHeader>
                  <CardTitle>{e.option}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
      {l1 >= 0 && l2 >= 0 && l3 >= 0 && l4 >= 0 && (
        <>
          <span className="text-4xl">
            Your character:{" "}
            <span className="font-bold">
              {`  
                ${options[l1].ops[l2].ops[l3].ops[l4].option}
                ${options[l1].ops[l2].ops[l3].option} 
                ${options[l1].ops[l2].option}
              `}
            </span>
          </span>
          <div className="border rounded shadow p-4 flex gap-2 flex-col">
            <span className="text-4xl">Your starter pack:</span>
            <div className="grid grid-cols-4 gap-4">
              {images.slice(1).map((item, i) => (
                <Image
                  className="rounded shadow"
                  src={item}
                  key={i}
                  alt={`${i}`}
                  width={480}
                  height={480}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
