import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Ayushman Sahoo | AI Engineer & Full Stack Developer",
  description: "Portfolio of Aditya Ayushman Sahoo — AI Engineer, Full Stack Developer, Research Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.className} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0d0d0d] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
