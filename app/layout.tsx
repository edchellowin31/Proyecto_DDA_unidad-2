import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestor de Solicitudes",
  description: "Aplicación para gestionar solicitudes de usuarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link href="/">Inicio</Link> |{" "}
          <Link href="/login">Login</Link> |{" "}
          <Link href="/register">Registro</Link> |{" "}
          <Link href="/solicitudes">Solicitudes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

