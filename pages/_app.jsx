import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Site-wide heading font (applied to every h1-h6 via globals.css).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${poppins.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}