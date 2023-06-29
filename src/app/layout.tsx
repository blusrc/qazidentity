import SiteHeader from "@/components/site-header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qazaq Identity Tests",
  description: "Сіздерде Банк картасымен төлеуге болады ма?",
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
        <div className="flex-1 p-16">{children}</div>
      </body>
    </html>
  );
}
