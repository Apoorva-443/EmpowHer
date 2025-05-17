import { ReactNode } from 'react';
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EmpowHer - Empowering Women Through Technology",
  description:
    "A digital platform designed to empower women in rural India and globally, focusing on skill development, economic opportunities, and personal growth.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
