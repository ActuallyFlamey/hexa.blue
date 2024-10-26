import localFont from "next/font/local"
import "./globals.css"
import type { Metadata } from "next"

const inter = localFont({
    src: "./fonts/Inter.ttf",
    variable: "--inter",
    weight: "400 500 600 700 900"
})

export const metadata: Metadata = {
    title: "HexaBlue"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-zinc-800`}>
                {children}
            </body>
        </html>
    )
}