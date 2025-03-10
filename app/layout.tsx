import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";


const robotoFlex = Roboto_Flex({
  variable: "--roboto-flex",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "On Focus",
  description: "Página Web empresarial creada con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${robotoFlex.variable} antialiased overflow-x-hidden`}
        id="start"
      >
        <Header />
          {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
