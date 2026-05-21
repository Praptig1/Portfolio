import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Script from "next/script";
import { Metadata } from "next";
import { BottomNav } from "./components/bottom-nav";
import { HomeNav } from "./components/home-nav";

export const metadata: Metadata = {
  title: {
    default: "prapti.com",
    template: "%s | prapti.com",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "prapti.com",
    description:
      "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://prapti.com",
    siteName: "prapti.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-[#f7efe5] ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {process.env.NEXT_PUBLIC_BEAM_TOKEN ? (
          <Script
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token={process.env.NEXT_PUBLIC_BEAM_TOKEN}
            strategy="afterInteractive"
          />
        ) : null}

        {children}
        <HomeNav />
        <BottomNav />
      </body>
    </html>
  );
}
