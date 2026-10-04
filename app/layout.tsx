import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tulas International School (TIS) | Redesign",
  description: "Ranked among India's top co-ed residential schools. Fostering academic excellence and holistic growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}