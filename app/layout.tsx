import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { poppins } from "@/components/ui/fonts";
import "./globals.css";
import Image from "next/image";
import { Vortex } from "@/components/ui/shadcn-io/vortex";
import { Suspense } from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "DevSlug | URL Shortener",
  description: "The way to shorten your URL",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <header className="h-24 w-full bg-black z-10 flex items-center px-4 shadow-2xl">
          <Image
            src="/devslug_logo.svg"
            width={250}
            height={250}
            className="mx-4 "
            alt="Logo devslug"
          />
        </header>
        <Suspense fallback={<div>Cargando...</div>}>
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={250}
            baseHue={120}
            className=""
          >
            {children}
          </Vortex>
        </Suspense>
      </body>
    </html>
  );
}
