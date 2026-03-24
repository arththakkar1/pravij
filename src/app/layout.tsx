import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis";

export const metadata: Metadata = {
  title: "Pravij Earthing Technologies | Solar Accessories Manufacturer",
  description:
    "Pravij Earthing Technologies — trusted manufacturer of high-quality solar accessories, earthing solutions, and lightning protection systems from Ahmedabad, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <LenisProvider>
        <body className="min-h-full flex flex-col">{children}</body>
      </LenisProvider>
    </html>
  );
}
