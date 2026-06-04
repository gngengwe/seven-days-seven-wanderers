import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seven Days, Seven Wanderers — A Children's Book",
  description:
    "A beautifully illustrated children's book about the hidden sky-story behind the days of the week, told through a grandmother, her grandson, and the ancient wanderers of the sky.",
  openGraph: {
    title: "Seven Days, Seven Wanderers",
    description:
      "The hidden story of the week above our heads. A picture book for curious children and the grown-ups who love learning with them.",
    url: "https://wanderers.ngengwe.com",
    siteName: "Seven Days, Seven Wanderers",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Days, Seven Wanderers",
    description: "The hidden story of the week above our heads.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://wanderers.ngengwe.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-screen bg-navy text-cream-dark font-body">
        {children}
      </body>
    </html>
  );
}
