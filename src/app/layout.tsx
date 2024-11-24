import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import '@smastrom/react-rating/style.css'



const manrope = Manrope({
  subsets: ["latin"], // Specify the language subset
  weight: ["400", "500", "700"], // Include only the weights you need
});

export const metadata: Metadata = {
  title: "We5ive | Home",
  description: "This is a sample e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-[1440px] mx-auto ${manrope.className}`}
      >
        {children}
      </body>
    </html>
  );
}
