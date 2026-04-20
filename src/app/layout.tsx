import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyler Koenig",
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
      </head>
      <body
        className={`${sourceCodePro.variable} bg-[var(--color-bg)] text-[var(--color-text)] font-mono min-h-screen`}
      >
        <ThemeProvider>
          {/* Full-width sticky nav */}
          <Nav />

          {/* Centered content column — border-l/r makes centering always visible */}
          <div className="max-w-[740px] mx-auto border-l border-r border-[var(--color-border)]">
            <main className="px-4ch py-3lh">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
