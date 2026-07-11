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
        {/* Ambient glow layer — gives the frosted-glass panels something to refract */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-32 left-[8%] h-[45vw] w-[45vw] rounded-full bg-[#ff6b35]/10 blur-[140px]" />
          <div className="absolute bottom-[4%] right-[6%] h-[42vw] w-[42vw] rounded-full bg-[#4f7cff]/10 blur-[150px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
