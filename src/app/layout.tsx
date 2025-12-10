import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeToggle";
import SmoothScroll from "@/components/ui/SmoothScroll";
import AnimatedCursor from "@/components/ui/AnimatedCursor";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erick Moti | Frontend Developer & SEO Specialist",
  description: "Certified Frontend Developer and IT graduate specializing in responsive web design, SEO optimization, and digital marketing strategy.",
  keywords: ["Frontend Developer", "SEO Specialist", "Digital Marketer", "React", "Next.js", "Nairobi"],
  authors: [{ name: "Erick Moti" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://erickmoti.com",
    title: "Erick Moti | Frontend Developer & SEO Specialist",
    description: "Certified Frontend Developer and IT graduate specializing in responsive web design, SEO optimization, and digital marketing strategy.",
    siteName: "Erick Moti Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <Preloader />
          <AnimatedCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}