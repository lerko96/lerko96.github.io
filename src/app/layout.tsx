import type { Metadata } from "next";
import { Montserrat, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyler Koenig | Portfolio",
  description:
    "SOC Helpdesk I by day, building beyond the title. Projects in AI tooling, mobile apps, infrastructure, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <ThemeScript />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${montserrat.variable} ${sourceCodePro.variable} bg-[var(--color-bg-deep)] text-[var(--color-text)] font-sans min-h-screen`}
      >
        <ThemeProvider>
          <Nav />
          <main className="max-w-5xl mx-auto px-6 py-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
