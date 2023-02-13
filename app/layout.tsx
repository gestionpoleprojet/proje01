
import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { PageWrapper } from '../components/PageWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head
        
       />

      <body>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
