import type { Metadata } from "next";
import { poppins } from "@/components/ui/fonts";
import "./globals.css";
import { Vortex } from "@/components/ui/shadcn-io/vortex";
import { Suspense } from "react";
import Header from "@/components/header";

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
            backgroundColor="transparent"
            rangeY={400}
            particleCount={230}
            baseHue={120}
            className="min-h-screen"
          >
            <Header />
            {children}
          </Vortex>
        </Suspense>
      </body>
    </html>
  );
}
