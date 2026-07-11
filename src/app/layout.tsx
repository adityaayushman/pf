import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pf-eight-xi.vercel.app"),
  title: "Aditya Ayushman Sahoo | AI & Machine Learning Engineer",
  description:
    "AI & Machine Learning undergraduate specializing in Computer Vision, Deep Learning and Cloud AI. I build real-time analytics platforms, cloud optimization systems and intelligent computer-vision applications with YOLOv8, PyTorch, TensorFlow and FastAPI.",
  keywords: [
    "Aditya Ayushman Sahoo",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "YOLOv8",
    "PyTorch",
    "TensorFlow",
    "FastAPI",
    "Cloud AI",
    "SRM Institute of Science and Technology",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Ayushman Sahoo" }],
  creator: "Aditya Ayushman Sahoo",
  openGraph: {
    type: "website",
    title: "Aditya Ayushman Sahoo | AI & Machine Learning Engineer",
    description:
      "Computer Vision, Deep Learning & Cloud AI. Real-time analytics, cloud optimization and intelligent CV systems built with YOLOv8, PyTorch, TensorFlow and FastAPI.",
    url: "https://pf-eight-xi.vercel.app",
    siteName: "Aditya Ayushman Sahoo",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Ayushman Sahoo | AI & Machine Learning Engineer",
    description:
      "Computer Vision, Deep Learning & Cloud AI engineer. Real-time analytics and intelligent CV systems.",
  },
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
