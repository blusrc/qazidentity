import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex justify-between w-full">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2"
          >
            <RocketIcon className="h-6 w-6" />
            <span className="font-bold dark:text-slate-300 text-slate-900">
              Qazaq Identity
            </span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
