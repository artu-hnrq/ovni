import './globals.sass'
import { Inter } from 'next/font/google'
import { Nav, Main, Col, Brand, } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ovni',
  description: 'Rave party toors',
}

export default function RootLayout({ children }) {

  let featured_pages = {
    'Home': '/',
    'Excursões': '/tour'
  }

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Material Symbols Font*/}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        {/* Flowbite min css */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      </head>
      <body class="min-h-screen min-w-screen">
        <Col.CenterCenter>
          <Nav pages={featured_pages} />

          <Main>
            {children}
          </Main>
        </Col.CenterCenter>

        {/* Flowbite js */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

      </body>
    </html >
  )
}
