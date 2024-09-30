import "./globals.css";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/utils/cn";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable)}>
      <body>{children}</body>
    </html>
  );
}
