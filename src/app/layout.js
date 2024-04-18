import { Inter } from "next/font/google";
import "./globals.css";
import "./media.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doce&Mimo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
