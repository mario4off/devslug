import type { Metadata } from "next";
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
      <body className={`${poppins.className} antialiased bg-black`}>
        <Suspense fallback={<div></div>}>
          <Vortex
            backgroundColor="black"
            rangeY={400}
            particleCount={230}
            baseHue={120}
            className="min-h-screen"
          >
            <header className="w-full bg-gradient-to-b from-black z-10 flex items-center  mx-5 shadow-2xl">
              <Image
                src="/logo.svg"
                width={250}
                height={95}
                loading="eager"
                alt="Logo devslug"
              />
            </header>
            {children}
          </Vortex>
        </Suspense>
      </body>
    </html>
  );
}
