import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./shapes.css";
import "./layout.css";
import NavBar from "@/components/nav_bar/nav_bar";
import PathButton from "@/components/path_button/pathButton";

const fnt = Poppins({
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: "ChrisJackem.com",
  description: "Chris Jackem Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fnt.className}`}>
        <main id="main-container">
          <NavBar/>
          
          <div className="child-container">
            {children}           
          </div>
          <footer id="footer" >Footer</footer>
        </main>
      </body>
    </html>
  );
}

