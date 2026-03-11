import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee_Inline } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungeeInline = Bungee_Inline({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee-inline',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vincenzo Barager | Software Engineer",
  description: "Computer Science student at Florida Tech building projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bungeeInline.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}