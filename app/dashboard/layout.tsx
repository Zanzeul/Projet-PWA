'use client'


import localFont from "next/font/local";
import "../globals.css";
import { ApplicationLayout } from "./design/ApplicationLayout";
import { Content } from "./design/Content";
import { Header } from "./design/Header";
import { Sidebar } from "./design/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRepositoryContextProvider from "../context/AppRepositoryContext";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({



  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient();

  return (
        <div className = "h-screen w-screen flex  justify-center items-center">
          <QueryClientProvider client = {queryClient}>
            <AppRepositoryContextProvider>
              <ApplicationLayout>
                <Header>
                  🎬 Cinetica
                </Header>
                <Sidebar></Sidebar>
                <Content>{children}</Content>
              </ApplicationLayout>
            </AppRepositoryContextProvider>
          </QueryClientProvider>
        </div>
  );
}
