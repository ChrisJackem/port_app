import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./shapes.css";
import "./layout.css";
import NavBar from "@/components/nav_bar";
import { AnimatePresence } from "motion/react";

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
          <NavBar />
          <div className="child-container">
            {/* {children} */}
            <AnimatePresence
              mode="wait"
            >{children}</AnimatePresence>      
            {/* <div >{children}</div> */}   
            {/* <motion.div
              variants={variants} // Pass the variant object into Framer Motion 
              initial="hidden" // Set the initial state to variants.hidden
              animate="enter" // Animated state to variants.enter
              exit="exit" // Exit state (used later) to variants.exit
              transition={{ type: 'tween' }} // Set the transition to tween
              className=""
            >
              {children}
            </motion.div>  */} 
          </div>
          <footer id="footer" >Footer</footer>
        </main>
      </body>
    </html>
  );
}

