import type { Metadata } from "next";
import { Germania_One, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const germaniaOne = Germania_One({
  subsets: ['latin'],
  variable: '--font-germania',
  weight: '400'
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibmPlexMono',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Os Galicia",
  description: "Portafolio de trabajos de Os Galicia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${germaniaOne.variable} ${ibmPlexMono.variable} antialiased bg-[#68181f]`}
      >
        <Navbar />
        <main className="mt-85 md:mt-40 xl:mt-26">
          {children}
        </main>
      </body>
    </html>
  );
}
