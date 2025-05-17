import { ReactNode } from 'react';
import "@/styles/globals.css"  // Changed path
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EmpowHer - Empowering Women Through Technology",
  description:
    "A digital platform designed to empower women in rural India and globally, focusing on skill development, economic opportunities, and personal growth.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <nav className="container mx-auto p-4">
            {/* Add your navigation here */}
          </nav>
          <main className="container mx-auto px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
