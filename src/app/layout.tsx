import type { Metadata } from "next";
import { armata, blinker, akira, libreFranklin } from "./config/fonts";
import "./globals.css";
import "./special.css";
import styles from "./layout.module.css";
import NavBar from "@/components/nav_bar/nav_bar";
import Footer from "@/components/footer/footer";
import ThemeWrapper from "@/components/theme_wrapper/theme_wrapper";


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
      <head>
        <link rel="icon" type="image/svg+xml" href="static/images/icons/favicon.svg"></link>
      </head>
      <body className={`t-txt ${libreFranklin.className} ${blinker.variable} ${akira.variable}`}>
        <ThemeWrapper>
        <main className={`${styles.main_container}`}>
          <NavBar/>
          
          <div className={`${styles.child_container}`}>          
              {children}            
          </div>
        </main>
        <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}

