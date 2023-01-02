import "../styles/globals.css";
import Script from 'next/script'
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
      <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W7TWFHK');
      `}
    </Script>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
