import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Portafolio Académico | Base de Datos II - UPLA",
  description:
    "Portafolio Académico de la asignatura Base de Datos II en la Universidad Peruana Los Andes (UPLA). Estudiante: Jorge Luis Curo Villar. Docente: Raul Enrique Fernandez Bejarano.",
  icons: {
    icon: "/logo-upla-transparent.png",
    shortcut: "/logo-upla-transparent.png",
    apple: "/logo-upla-transparent.png",
  },
  keywords: [
    "UPLA",
    "Universidad Peruana Los Andes",
    "Base de Datos II",
    "Portafolio Académico",
    "Jorge Luis Curo Villar",
    "Ingeniería de Sistemas y Computación",
    "SQL Server",
    "Huancayo",
  ],
  authors: [{ name: "Jorge Luis Curo Villar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
