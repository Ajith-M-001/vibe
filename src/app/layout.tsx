import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { APP_NAME } from "@/lib/constants";
import { APP_DESCRIPTION } from '../lib/constants';

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION}`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <TRPCReactProvider>
          <main>{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
