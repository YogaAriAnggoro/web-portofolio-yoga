import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://yoga-ari-anggoro.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yoga Ari Anggoro | Front-End Developer Portfolio",
  description:
    "Portofolio profesional Yoga Ari Anggoro, Junior Front-End Developer, UI/UX Designer, dan Graphic Designer.",
  keywords: [
    "Yoga Ari Anggoro",
    "Front-End Developer",
    "Portfolio",
    "UI UX Designer",
    "Graphic Designer",
    "Next.js",
  ],
  openGraph: {
    title: "Yoga Ari Anggoro | Front-End Developer Portfolio",
    description:
      "Portofolio modern dark mode dengan project, pengalaman, dan keahlian Yoga Ari Anggoro.",
    url: SITE_URL,
    siteName: "Yoga Ari Anggoro Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/img/sinergiunesa.png",
        width: 768,
        height: 1024,
        alt: "Yoga Ari Anggoro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Ari Anggoro | Front-End Developer Portfolio",
    description:
      "Portofolio modern dark mode dengan project, pengalaman, dan keahlian Yoga Ari Anggoro.",
    images: ["/img/sinergiunesa.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
