import type { Metadata } from "next";
import { Armata, Jockey_One } from "next/font/google";
import "./globals.css";
import "./shapes.css";
import "./layout.css";
import NavBar from "@/components/nav_bar/nav_bar";
import Footer from "@/components/footer/footer";
import ThemeWrapper from "@/components/theme_wrapper/theme_wrapper";

const font_body = Armata({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-armata'
});

const font_header = Jockey_One({
    subsets:['latin'],  
    weight: '400',
    variable: '--font-header'
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
      <body className={`${font_body.className} ${font_header.variable}`}>
        <main id="main-container" className="anim-bg">
          <NavBar/>
          <div className="child-container">
            <ThemeWrapper>
              {children}
            </ThemeWrapper>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

