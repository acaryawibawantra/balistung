import type { Metadata } from "next";
import { Poppins, Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Balistung - Les Baca Tulis Hitung untuk Anak PAUD, SD, SMP di Denpasar",
  description: "Balistung adalah tempat les privat terpercaya untuk anak PAUD, SD, dan SMP di Denpasar, Bali. Belajar membaca, menulis, dan menghitung dengan metode yang menyenangkan dan pengajar berpengalaman.",
  keywords: ["les privat", "balistung", "baca tulis hitung", "PAUD", "SD", "SMP", "Denpasar", "Bali", "les anak"],
  authors: [{ name: "Balistung" }],
  openGraph: {
    title: "Balistung - Les Baca Tulis Hitung",
    description: "Les privat untuk anak PAUD, SD, dan SMP di Denpasar, Bali",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${quicksand.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
