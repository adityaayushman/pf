import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Ayushman Sahoo",
  jobTitle: "AI & Machine Learning Engineer",
  url: "https://pf-eight-xi.vercel.app",
  email: "mailto:adityaasahoo@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SRM Institute of Science and Technology",
  },
  sameAs: [
    "https://github.com/adityaayushman",
    "https://www.linkedin.com/in/aditya-ayushman-sahoo-243b81287/",
    "https://leetcode.com/u/AdityaAyushmanSahoo/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#000000] text-white overflow-x-hidden">
        {/* Preload the first hero frame so it can paint immediately */}
        <link
          rel="preload"
          as="image"
          href="/sequence/frame_000_delay-0.066s.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
