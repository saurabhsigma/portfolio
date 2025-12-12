import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Saurabh Singh | Portfolio",
  description: "Modern minimal portfolio of Saurabh Singh - Programmer & Web Developer",
};

import { ScrollProgress } from "@/components/scroll-progress";

import { StarryBackground } from "@/components/starry-background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased selection:bg-primary/20 bg-background text-foreground font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <StarryBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
