import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Personal Website of Ahmad Shaleh Kurniawan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto px-80 py-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
