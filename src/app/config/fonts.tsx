import { Armata, Blinker, Libre_Franklin, Zalando_Sans_Expanded, Atkinson_Hyperlegible_Mono } from 'next/font/google';
import localFont from 'next/font/local'

/******** Font Definition File ********************/
export const atkin = Atkinson_Hyperlegible_Mono({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['arial', 'system-ui'],
})


export const akira = Zalando_Sans_Expanded({
  weight: ['400', '700', '900'],
  variable: "--f-akira",
  fallback: ['impact', 'system-ui'],
})

export const libreFranklin = Libre_Franklin({
  weight: ['400', '700'], 
  subsets: ['latin'],
  display: 'swap',
  variable: '--f-lexend'
})

// Header and button font
export const blinker = Blinker({
  subsets: ["latin"],
  weight: "700",
  variable: "--f-blinker"
});

// Any other text
export const armata = Armata({
  subsets: ["latin"],
  weight: '400',
  variable: '--f-armata'
});

