import { Armata, Blinker } from 'next/font/google';

/******** Font Definition File ********************
 * 
 * Default:
 * body -> armata font className
 *      -> var(--f-blinker)
 * 
 * Use --f-blinker variable where you need it quickly
 */

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

