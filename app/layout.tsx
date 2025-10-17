import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rene Charter - Premium Charter Services",
  description: "Experience luxury charter services with Rene Charter. Book your next adventure with our premium fleet and professional crew.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
