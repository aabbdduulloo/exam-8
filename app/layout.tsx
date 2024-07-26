import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sport market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira_sans.className}>
        <header className="bg-[#1F1D14]">
          <Header />
        </header>
        <main>
          {children}
        </main>
      </body>
      <Footer/>
    </html>
  );
}