import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import RoyalSilkBackground from "@/components/RoyalSilkBackground";
import VelvetCurtain from "@/components/VelvetCurtain";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "AGENTIC REVOLUTION | Analytics Vidhya X Groq",
  description: "Master the architecture of self-reasoning AI. Join the Agentic AI Pioneer Program.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden bg-[#F8F6F4]">
        <VelvetCurtain />
        <RoyalSilkBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
