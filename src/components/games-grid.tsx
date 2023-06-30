"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    id: 1,
    header: "Бұл қанша Camry тұрады?",
    description: "Кең таралған заттардың бағасы Camry-мен салыстыр",
    img: "/camry-70.webp",
    link: "/camry",
  },
  {
    id: 2,
    header: "Сен VS Жұрттың баласы",
    description: "Мамаң салыстырып болды ма? Енді өзің көр!)",
    img: "/game2.jpg",
    link: "/slider",
  },
  {
    id: 3,
    header: "Сен vs Жұрттың Баласы",
    description: "Мамаң салыстырып болды ма? Енді өзің көр!)",
    img: "/quiz/costume.png",
    link: "/starter-pack",
  },
];

export default function GamesGrid() {
  return games.map((game) => {
    return (
      <Card
        key={game.id}
        className="hover:shadow-xl transition-all ease-in"
      >
        <CardHeader>
          <CardTitle>{game.header}</CardTitle>
          <CardDescription>{game.description}</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="w-full rounded aspect-video overflow-hidden flex items-center">
            <Image
              src={game.img}
              alt="camry"
              width={960}
              height={960}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            className="w-full"
            size="lg"
          >
            <Link href={game.link}>
              <PlayIcon className="mr-2 w-5 h-5" /> Play
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  });
}
