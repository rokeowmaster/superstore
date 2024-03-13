import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import {ClerkProvider} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuperStore",
  description: "Your destination for quality furniture",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <BottomNav />
      </body>

    </html>
    </ClerkProvider>
  );
}
