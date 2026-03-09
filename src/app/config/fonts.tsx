import { Armata, Blinker, Libre_Franklin, Zalando_Sans_Expanded } from 'next/font/google';
import localFont from 'next/font/local'

/******** Font Definition File ********************
 * 
 * Default:
 * body -> armata font className
 *      -> var(--f-blinker)
 * 
 * Use --f-blinker variable where you need it quickly
 */

export const akira = Zalando_Sans_Expanded({
  weight: ['400', '700', '900'],
  variable: "--f-akira"
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

