import { Baloo_2, Inter } from "next/font/google";
import "@/styles/globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${baloo.variable} ${inter.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}