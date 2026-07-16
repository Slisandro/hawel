import { Albert_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configuración de Albert Sans
const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={albertSans.variable}
    >
      <body className="font-albert">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}