import type { Metadata } from "next";
import { armata, blinker, akira, libreFranklin } from "./config/fonts";
import "./globals.css";
import "./special.css";
import styles from "./layout.module.css";
import NavBar from "@/components/nav_bar/nav_bar";
import Footer from "@/components/footer/footer";
import ThemeWrapper from "@/components/theme_wrapper/theme_wrapper";
import PageBannerPersist, { PageBannerProvider } from "@/components/page_banner/page_banner_persist";
import { ModalProvider } from "@/components/modals/modal_context";
import ContactInfo from "@/components/contact_form/contact_form";
import FlackPopup from "@/components/flack_popup/flack_popup";
import { AnimatePresence } from "motion/react";
import { HCaptchaProvider } from "@hcaptcha/react-hcaptcha/hooks";
import ContactWrapped from "@/components/contact_form/contact_form";

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
        <ModalProvider>            
            <ContactWrapped/>           
            <FlackPopup/>

          <main className={`${styles.main_container}`}>
            <NavBar/>          
            <div className={`${styles.child_container}`}>
              <PageBannerProvider >
                <PageBannerPersist />
                {children}            
              </PageBannerProvider>
            </div>
          </main>
          <Footer />

        </ModalProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}

