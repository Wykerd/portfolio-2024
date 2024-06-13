import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Daniel Wykerd",
  description: "Hey, I'm Daniel Wykerd. Final year Electrical and Electronic Engineering undergrad at Stellenbosch University, South Africa.",
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
