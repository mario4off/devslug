import type { Metadata } from "next";
import { poppins } from "@/components/ui/fonts";
import "./globals.css";
import { Vortex } from "@/components/ui/shadcn-io/vortex";
import { Suspense } from "react";
import SessionWrapper from "@/components/session";
import Header from "@/components/main-header";

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
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className} antialiased bg-black`}>
          <Suspense fallback={<div></div>}>
            <Vortex
              backgroundColor="transparent"
              rangeY={400}
              particleCount={230}
              baseHue={120}
              className="min-h-screen  overflow-hidden"
            >
              <Header />
              <main>{children}</main>
            </Vortex>
          </Suspense>
        </body>
      </html>
    </SessionWrapper>
  );
}
