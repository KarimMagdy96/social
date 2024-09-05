"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import ResponsiveAppBar from "./_Components/navbar/page";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
              <ResponsiveAppBar />

              {children}
            </body>
          </Provider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
