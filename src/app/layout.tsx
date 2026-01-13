import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign in - Bagdja",
  description: "Sign in to your Bagdja account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
