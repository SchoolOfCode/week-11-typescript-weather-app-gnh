// The `layout.tsx` file is used to create a shared layout for multiple pages . It's typically placed in the `app` directory and applies to all pages within that directory and its subdirectories. The main purposes of `layout.tsx` are:

// - To provide a consistent structure across multiple pages
// - To share UI elements that should appear on every page (like navigation and footer)
// - To wrap pages with providers, such as for themes or state managemen

import { Metadata } from "next";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata={title: 'Weather App',
    description: 'A Weather App'}

    export default function RootLayout({
        children,
      }: {
        children: React.ReactNode
      }) {
        return (
          <html lang="en">
            <body className={inter.className}>
              {/* <Navbar /> */}
              <main>{children}</main>
              {/* <Footer /> */}
            </body>
          </html>
        )
      }