
import '/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useRef } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inustudy!',
}

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">

        <body className=" z-[-1] static bg- min-h-screen  bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]
         from-white via-white to-slate-900 bg-no-repeat w-full h-full no-scrollbar scroll-smooth">

        
        
        {children}

      
        </body>

    </html>
  )
}
