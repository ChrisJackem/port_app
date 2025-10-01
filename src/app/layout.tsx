import type { Metadata } from "next";
import { armata, blinker } from "./config/fonts";
import "./globals.css";
import "./shapes.css";
import styles from "./layout.module.css";
import NavBar from "@/components/nav_bar/nav_bar";
import Footer from "@/components/footer/footer";
import ThemeWrapper from "@/components/theme_wrapper/theme_wrapper";

/* const font_header = Jockey_One({
    subsets:['latin'],  
    weight: '400',
    variable: '--font-header'
}); */

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
      <body className={`${armata.className} ${blinker.variable}`}>
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

