import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

import { connectToMongoDB } from '@/lib/mongo';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Finance Manager",
  description: "Managed Your banking transaction and your personal finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  connectToMongoDB();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="mx-2 md:mx-5 mt-20 mb-10">
            {children}
        </div>
        <Toaster swipeDirection="up"/>
        <Footer />
      </body>
    </html>
  );
}
