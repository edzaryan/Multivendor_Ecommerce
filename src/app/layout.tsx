import { type Metadata } from "next";

// Global css
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: 
    `GoShop is a multivendor marketplace for everyday shopping. Discover trusted sellers, 
    compare options, and enjoy secure checkout, fast shipping, and reliable support.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
