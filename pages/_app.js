import "../styles/globals.css";
import { Pacifico, Caveat, Quicksand } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})



function MyApp({ Component, pageProps }) {
  return (
    <main className={`${pacifico.variable} ${caveat.variable} ${quicksand.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
