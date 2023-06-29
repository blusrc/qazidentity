"use client";
import { SliderDemo } from "@/components/sliderthing";
import { useState } from "react";

const jurtProps = [
  {
    val: 5,
    desc: (
      <>
        <div>Сен: Мектеп табалдырығын аттадың</div>
        <div>Жұрттың баласы: Сені оқуға қабылдаған мұғалім</div>
      </>
    ),
  },
  {
    val: 10,
    desc: (
      <>
        <div>Сен: бастауыш мектепті бітірдің </div>
        <div>Жұрттың баласы: Математикадан олимпиада жазып, IMO-ға өтті</div>
      </>
    ),
  },
  {
    val: 15,
    desc: (
      <>
        <div>Сен: алғашқы махаббатың басқаға кетіп қалды</div>
        <div>Жұрттың баласы: *басқа бала*</div>
      </>
    ),
  },
  {
    val: 20,
    desc: (
      <>
        <div>Сен: алғашқы рет nFactorial-ға келдің</div>
        <div>
          Жұрттың баласы: уже 15-те барлық nFactorial курстарын бітіріп тастаған{" "}
        </div>
      </>
    ),
  },
  {
    val: 25,
    desc: (
      <>
        <div>Сен: тұрақты жұмысқа тұрдың</div>
        <div>
          Жұрттың баласы: Алматыдан он пәтер сатып алып, жалға береді-
          миллиардер
        </div>
      </>
    ),
  },
  {
    val: 30,
    desc: (
      <>
        <div>Сен: отбасын құрдың</div>
        <div>Жұрттың баласы: баласы мектеп бітірді</div>
      </>
    ),
  },
  {
    val: 35,
    desc: (
      <>
        <div>Сен: алғашқы бизнесіңді аштың</div>
        <div>Жұрттың баласы: сенің бизнесіңе инвестор болды</div>
      </>
    ),
  },
  {
    val: 40,
    desc: (
      <>
        <div>Сен: ата-анаңды бір рет Меккеге апарып келдің</div>
        <div>
          Жұрттың баласы: ата-анасын Меккеге бес рет арқалап апарып келді
        </div>
      </>
    ),
  },
  {
    val: 45,
    desc: (
      <>
        <div>Сен: </div>
        <div>Жұрттың баласы: </div>
      </>
    ),
  },
  {
    val: 50,
    desc: (
      <>
        <div>Сен: креслодан тұрсаң тізең ауырады</div>
        <div>
          Жұрттың баласы: жеті айронмен өтіп тастады, ультрамарафон жүгіреді
        </div>
      </>
    ),
  },
  {
    val: 55,
    desc: (
      <>
        <div>Сен: демалысқа Қапшағайға барып келдің</div>
        <div>Жұрттың баласы: тұрақты түрде демалуға Марсқа ұшып тұрады</div>
      </>
    ),
  },
  {
    val: 60,
    desc: (
      <>
        <div>Сен: подъезд кеңесіне кірдің</div>
        <div>
          Жұрттың баласы: подъезд кеңесінің басшысы, ремонтқа ақша жинап жүр
        </div>
      </>
    ),
  },
  {
    val: 65,
    desc: (
      <>
        <div>Сен: алғаш рет зейнетақы алдың</div>
        <div>
          Жұрттың баласы: 30-да зейнетақыға шығып кетіп, содан бері жұмыс
          істемейді
        </div>
      </>
    ),
  },
  {
    val: 70,
    desc: (
      <>
        <div>Сен: Немере сүйдің </div>
        <div>Жұрттың баласы: Шөбере, шепшек, немене сүйіп қойған </div>
      </>
    ),
  },
  {
    val: 75,
    desc: (
      <>
        <div>Сен: Ауылдың тойларына барасың</div>
        <div>Жұрттың баласы: Ауылдың тойларында бата береді</div>
      </>
    ),
  },
  {
    val: 80,
    desc: (
      <>
        <div>Сен: Немерелеріңе ақыл айтасың</div>
        <div>
          Жұрттың баласы: Подкаст ашып алған, бар әлем немерелеріне ақыл айтады
        </div>
      </>
    ),
  },
];

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState([0]);
  const [jurttynBalasy, setJurttynBalasy] = useState<React.ReactNode>("");
  const [jbState, setJbState] = useState<React.ReactNode | undefined>();

  function handleChangeSlider(val: number[]) {
    setSliderValue(val);
    handleBala(val);
  }
  function handleBala(val: number[]) {
    const matchingProp = jurtProps.find((prop) => prop.val === val[0]);
    if (matchingProp) {
      setJurttynBalasy(matchingProp.desc);
      // setJbState(matchingProp.img);
    } else {
      setJurttynBalasy("");
    }
  }

  return (
    <div>
      <div className="flex items-center flex-col gap-4">
        {jbState}
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
