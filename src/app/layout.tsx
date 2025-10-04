import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasmat Patel | Senior UI Developer & UI/UX Specialist | 7.6 Years Experience",
  description: "Portfolio of Hasmat Patel, Senior UI Developer with 7.6 years of experience. Showcases responsive, pixel-perfect, and accessible web interfaces, UI/UX design, component-based development, and performance-optimized projects.",
  keywords: [
    "Hasmat Patel",
    "UI Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "React.js",
    "Next.js",
    "HTML5 CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Design",
    "Web Accessibility",
    "Performance Optimization",
    "Portfolio"
  ],
  author: "Hasmat Patel",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
