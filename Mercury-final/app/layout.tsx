import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: 'Mercury-Pay',
  description: 'Mercury designs, deploys, and manages Digital Payment ecosystems that enable sovereignty and inclusion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      <Footer />

      {/* <div id="root"></div>  */}
      <div className="modalDiv"></div>
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    
      <script defer type="text/javascript" src="https://haymkarran.design/ImageSliderScript.js"></script>
      </body>
    </html>
  )
}
