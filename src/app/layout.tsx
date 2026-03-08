import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "WildTerminator Climate Vision | AI-Powered Environmental Intelligence",
  description:
    "An independent, non-profit environmental research and education platform advancing climate science through AI-driven intelligence. Transforming scientific knowledge into structured awareness and scalable climate solutions.",
  keywords: [
    "climate change",
    "environmental intelligence",
    "AI climate",
    "sustainability",
    "conservation",
    "biodiversity",
    "carbon emissions",
    "wildterminator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
