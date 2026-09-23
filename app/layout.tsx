import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive Search für Beteiligungsunternehmen | b+p",
  description:
    "b+p besetzt und beurteilt Führungskräfte in Beteiligungs- und Portfoliounternehmen. Für Family Offices, Beteiligungsgesellschaften und Private-Equity-Investoren.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
