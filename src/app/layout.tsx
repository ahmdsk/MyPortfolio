import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ahmad Shaleh Kurniawan | Full Stack Developer',
  description: 'Personal Website of Ahmad Shaleh Kurniawan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Navbar />
        <div className="container mx-auto lg:px-60 xl:px-80 min-[300px]:px-4 py-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
