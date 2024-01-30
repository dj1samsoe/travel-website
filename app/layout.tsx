import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layouts";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}