import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import '../styles/globals.scss'
import Header from "@/components/header";

const inter = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: 'Youtube',
    description: 'my youtube app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    )
}
