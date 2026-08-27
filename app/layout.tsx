import type { Metadata } from "next";
import { poppins } from "@/components/ui/fonts";
import "./globals.css";
import { Vortex } from "@/components/ui/shadcn-io/vortex";
import { Suspense } from "react";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import { Toaster } from "sileo";

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
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className} antialiased bg-black `}>
          <Suspense fallback={<div></div>}>
            <Vortex
              backgroundColor="transparent"
              rangeY={400}
              particleCount={150}
              baseHue={120}
              className="min-h-screen  overflow-hidden  grid grid-rows-[auto_1fr_auto]"
            >
              <Toaster position="top-center" offset={{ top: 30 }} />
              <MainHeader />
              <main className="flex flex-col my-2 min-w-0 w-full mx-auto px-6 sm:px-6 py-2">
                {children}
              </main>
              <MainFooter />
            </Vortex>
          </Suspense>
        </body>
      </html>
    </>
  );
}
