import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Interno",
  description: "Let your home be unique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light`}>
        <Navbar />

        {children}
        {/* 
        <Footer globalData={await fetchGlobalData()}/> */}
      </body>
    </html>
  );
}
