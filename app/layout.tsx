"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./../component/nav"
import Footer from "./../component/footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
   <html>
   <body>
  <div>
    {/* Navbar will be fixed at the top */}
    <Nav />
    {/* Padding top to prevent content from going under the fixed Navbar */}
    <div className="pt-16">
      {children}
    </div>
    <Footer />
  </div>
</body>
   </html>
  );
}
