import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PM Club SJSU | Product Management Club at San Jose State University",
  description:
    "Join PM Club SJSU to accelerate your path in product management with networking, learning, and hands-on experience opportunities.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%207-rjYD4WCvnMImugk8G3lCYiqgfoKzY0.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%207-rjYD4WCvnMImugk8G3lCYiqgfoKzY0.png",
      },
    ],
  },
  openGraph: {
    title: "PM Club SJSU | Product Management Club at San Jose State University",
    description:
      "Join PM Club SJSU to accelerate your path in product management with networking, learning, and hands-on experience opportunities.",
    url: "https://pmclubsjsu.com",
    siteName: "PM Club SJSU",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PM%20Club%20Square%20Logo-EtEBH67bj93ON8yLdQbXvN0RAJrsPt.png",
        width: 1200,
        height: 1200,
        alt: "PM Club SJSU Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Club SJSU | Product Management Club at San Jose State University",
    description:
      "Join PM Club SJSU to accelerate your path in product management with networking, learning, and hands-on experience opportunities.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PM%20Club%20Square%20Logo-EtEBH67bj93ON8yLdQbXvN0RAJrsPt.png",
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'