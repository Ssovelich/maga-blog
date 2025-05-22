import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
// import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"]})


export const metadata: Metadata = {
  title: "Create Blog App",
  description: "Super description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
