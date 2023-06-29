import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    id: 1,
    header: "Бұл қанша камри тұрады?",
    description: "Know how much a thing costs in Toyota Camrys",
    img: "/camry-70.webp",
    link: "/camry",
  },
  {
    id: 2,
    header: "Сен қандай той жұлдызысың?",
    description: "Know how much a thing costs in Toyota Camrys",
    img: "/stars.jpg",
    link: "/",
  },
  {
    id: 3,
    header: "Сен қандай VIP қазақсың?",
    description: "Know how much a thing costs in Toyota Camrys",
    img: "/camry-70.webp",
    link: "/",
  },
];

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {games.map((game) => (
        <Card
          key={game.id}
          className="hover:shadow-xl transition-all ease-in"
        >
          <CardHeader>
            <CardTitle>{game.header}</CardTitle>
            <CardDescription>{game.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={game.img}
              alt="camry"
              width={960}
              height={960}
              className="w-full rounded"
            />
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
      ))}
    </section>
  );
}
