import Footter from "./components/Footter";
import Nav from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { M_PLUS_1 } from "next/font/google";

const mplus = M_PLUS_1({
  subsets: ["latin"],
});

export const metadata = {
  title: "Stoichiometric",
  description: "awesometaroのブログ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mplus.className}>
        <Nav />
        <div className="p-8">{children}</div>
        <Analytics />
        <Footter />
      </body>
    </html>
  );
}
