import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadhamza291098-hub.github.io/POTFOLIO/"),
  title: "HAMZA // The Living Network",
  description:
    "Muhammad Hamza's interactive cyber security portfolio: threat intelligence, distributed systems, packet forensics, security governance, embedded systems and AI infrastructure.",
  keywords: [
    "Muhammad Hamza",
    "Cyber Security",
    "Network Security",
    "Threat Intelligence",
    "AI Infrastructure",
    "Nottingham",
  ],
  openGraph: {
    title: "HAMZA // The Living Network",
    description: "Follow the signal through cyber security projects, systems and evidence.",
    type: "website",
    url: "/POTFOLIO/",
    images: [{ url: "/POTFOLIO/og.webp", width: 1200, height: 630, alt: "HAMZA // The Living Network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMZA // The Living Network",
    description: "Follow the signal through cyber security projects, systems and evidence.",
    images: ["/POTFOLIO/og.webp"],
  },
  icons: {
    icon: "/POTFOLIO/favicon.svg",
    shortcut: "/POTFOLIO/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
