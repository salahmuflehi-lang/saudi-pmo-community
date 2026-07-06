import type { Metadata } from "next";
import { Alexandria, Geist_Mono } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saudi PMO Community — Where project leaders build together",
  description:
    "An independent community for PMO and project-delivery professionals in Saudi Arabia. Rooted in Najdi heritage, built for the ambition of Vision 2030.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alexandria.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
