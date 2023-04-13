import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { myself } from '@/utils/myself'
import 'moment/locale/id'

export const metadata = {
  title: `${myself.name} | ${myself.job}`,
  description: `Personal Website of ${myself.name}`,
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
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
      <body className="bg-white dark:bg-[#18181b] transition-all ease-in-out duration-300">
        <Navbar />
        <div className="container mx-auto lg:px-60 xl:px-80 min-[300px]:px-4 py-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
