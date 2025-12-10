import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DumpSack — Multi-chain wallet for Gorbagana & Solana",
  description: "Install DumpSack, the multi-chain wallet for Gorbagana and Solana. Simple send/receive, fast swaps, and unified portfolio management. Android coming soon.",
  icons: {
    icon: [
      { url: '/favicon-32.png?v=4', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png?v=4', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png?v=4',
  },
  openGraph: {
    title: "DumpSack — Multi-chain wallet for Gorbagana & Solana",
    description: "Install DumpSack, the multi-chain wallet for Gorbagana and Solana. Simple send/receive, fast swaps, and unified portfolio management.",
    url: "https://dumpsack.xyz",
    siteName: "DumpSack",
    images: [
      {
        url: "https://dumpsack.xyz/logo.svg",
        width: 1200,
        height: 630,
        alt: "DumpSack — Multi-chain wallet for Gorbagana & Solana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DumpSack — Multi-chain wallet for Gorbagana & Solana",
    description: "Install DumpSack, the multi-chain wallet for Gorbagana and Solana.",
    images: ["https://dumpsack.xyz/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=4" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
