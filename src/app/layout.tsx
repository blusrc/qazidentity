import SiteHeader from "@/components/site-header";
import { config } from "@/data/site-config";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <div className="flex-1 p-4 md:p-16">{children}</div>
        <div className="p-2 bg-slate-100 bottom-0 container w-full flex justify-center absolute">
          made with {`<3`} during n! incubator by @blusrc and @inabatron
        </div>
      </body>
    </html>
  );
}
