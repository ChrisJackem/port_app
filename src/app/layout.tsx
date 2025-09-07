import type { Metadata } from "next";
import { Armata } from "next/font/google";
import "./globals.css";
import "./shapes.css";
import "./layout.css";
import NavBar from "@/components/nav_bar/nav_bar";
import Footer from "@/components/footer/footer";
import ThemeWrapper from "@/components/theme_wrapper/theme_wrapper";

const fnt = Armata({
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
        <main id="main-container" className="anim-bg">
          <NavBar/>          
          <div className="child-container">
            <ThemeWrapper>
              {children}
            </ThemeWrapper>
            <Footer />
          </div>          
        </main>
      </body>
    </html>
  );
}

