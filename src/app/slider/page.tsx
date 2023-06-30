"use client";
import { SliderDemo } from "@/components/sliderthing";
import { useState } from "react";

const jurtProps = [
  {
    val: 0,
    descYou: "Гугу-гага дедің",
    descJB: "Абайдың қара сөздерін жатқа айтып береді",
    imageName: "meme_0.jpeg"
  },
  {
    val: 5,
    descYou: "Мектеп табалдырығын аттадың",
    descJB: "Сені оқуға қабылдаған мұғалім",
    imageName: "meme_5.jpeg"
  },
  {
    val: 10,
    descYou: "Бастауыш мектепті бітірдің",
    descJB: "Математикадан олимпиада жазып, IMO-ға өтті",
    imageName: "meme_10.jpeg"
  },
  {
    val: 15,
    descYou: "Алғашқы махаббатың басқаға кетіп қалды",
    descJB: "*басқа бала*",
    imageName: "meme_15.jpg"
  },
  {
    val: 20,
    descYou: "Алғашқы рет nFactorial-ға келдің",
    descJB: "Уже 15 жасында барлық nFactorial курстарын бітіріп тастаған",
    imageName: "meme_20.jpeg"
  },
  {
    val: 25,
    descYou: "Тұрақты жұмысқа тұрдың",
    descJB: "Алматыдан он пәтер сатып алып, жалға береді-миллиардер",
    imageName: "meme_25.jpeg"
  },
  {
    val: 30,
    descYou: "Отбасын құрдың",
    descJB: "Баласы мектеп бітірді",
    imageName: "meme_30.jpg"
  },
  {
    val: 35,
    descYou: "Алғашқы бизнесіңді аштың",
    descJB: "Сенің бизнесіңе Кремний алқабынан инвестиция жіберді",
    imageName: "meme_35.jpg"
  },
  {
    val: 40,
    descYou: "Ата-анаңды мешітке апарып келдің",
    descJB: "Ата-анасын Меккеге бес рет арқалап апарып келді",
    imageName: "meme_40.jpg"
  },
  {
    val: 45,
    descYou: "Бақшаңда картоп егесің, түк өспейді",
    descJB: "Екпеген егіні құлпырып өседі",
    imageName: "meme_45.jpeg"
  },
  {
    val: 50,
    descYou: "Креслодан тұрсаң тізең ауырады",
    descJB: "Жеті Ironman өтіп тастады, ультрамарафон жүгіреді",
    imageName: "meme_50.jpeg"
  },
  {
    val: 55,
    descYou: "Демалысқа Қапшағайға барасың",
    descJB: "Тұрақты түрде демалуға Марсқа ұшып тұрады",
    imageName: "meme_55.jpeg"
  },
  {
    val: 60,
    descYou: "Подъезд кеңесіне кірдің",
    descJB: "Подъезд кеңесінің басшысы, ремонтқа ақша жинап жүр",
    imageName: "meme_60.jpg"
  },
  {
    val: 65,
    descYou: "Алғаш рет зейнетақы алдың",
    descJB: "30-да зейнетақыға шығып кетіп, содан бері жұмыс істемейді",
    imageName: "meme_65.jpeg"
  },
  {
    val: 70,
    descYou: "Немере сүйдің",
    descJB: "Шөбере, шепшек, немене сүйіп қойған, әрқайсысы бөлек жұрттың баласы",
    imageName: "meme_70.jpg"
  },
  {
    val: 75,
    descYou: "Ауылдың тойларына барасың",
    descJB: "Ауылдың тойларында бата береді",
    imageName: "meme_75.jpeg"
  },
  {
    val: 80,
    descYou: "Немерелеріңе ақыл айтасың",
    descJB: "Подкаст ашып алған, бар әлем немерелеріне ақыл айтады",
    imageName: "meme_80.jpeg"
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
  
  const handleBala = (val: number[]) => {
    const matchingProp = jurtProps.find((prop) => prop.val === val[0]);
    if (matchingProp) {
      setJurttynBalasy(
        <>
          <div className="10px text-4xl">Сен: {matchingProp.descYou}</div>
          <div className="font-bold text-4xl text-center">Жұрттың баласы: {matchingProp.descJB}</div>
        </>
      );
      if (matchingProp.imageName) {
        setJbState(<img src={`${matchingProp.imageName}`} alt="Description" />);
      } else {
        setJbState(undefined);
      }
    } else {
      setJurttynBalasy("");
      setJbState(undefined);
    }
  };

  return (
    <div>
      <div className="flex items-center flex-col gap-4">
        <div className="text-xl font-bold">{sliderValue} жаста</div>
        <SliderDemo defaultValue={[0]} onValueChange={handleChangeSlider} />
        {jurttynBalasy}
        {jurttynBalasy && (
          <div>
            {jbState && <div>{jbState}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

