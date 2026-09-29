import type { Metadata, Viewport } from "next";
import { Geist_Mono, Nunito_Sans, Roboto } from "next/font/google";
import "@/src/features/home/styles/home.css";
import "@/src/features/home/styles/not-found.css";
import "@/src/features/services/styles/services.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "QRS Technologies | Digital Services & Automation",
    template: "%s | QRS Technologies",
  },
  description:
    "QRS Technologies helps businesses plan, build, automate, and grow with practical digital solutions.",
  icons: {
    icon: "/favicon.svg?v=2",
    shortcut: "/favicon.svg?v=2",
  },
};

export const viewport: Viewport = {
  themeColor: "#4F46E5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${nunitoSans.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
