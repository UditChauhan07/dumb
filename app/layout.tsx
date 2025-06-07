import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "TechNova Systems - Future-Proof Engineering for Digital-First Businesses",
  description:
    "Transform your business with cutting-edge technology. We provide digital transformation, full-stack development, cloud engineering, and AI solutions for enterprise clients and high-growth startups.",
  keywords:
    "software development, digital transformation, cloud engineering, AI development, full-stack development, mobile apps, DevOps, enterprise software",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
