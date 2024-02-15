import { Urbanist } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layouts";
import { Metadata } from "next";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  creator: "Achmad Fauzian Dhany Hidayat",
  description: "Website Slicing UI Design from Figma",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-2.png",
        href: "/logo-2.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
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
