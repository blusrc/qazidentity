"use client";
import { SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex justify-between w-full">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2"
          >
            <SunIcon className="h-8 w-8 text-yellow-500 bg-blue-500 rounded p-1" />
            <span className="font-bold dark:text-slate-300 text-slate-900">
              Qazaq Identity Tests
            </span>
          </Link>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
}
