import { Inter } from "next/font/google"
import "./globals.css"
import Sidenav from "@/components/navigation/Sidenav"
import Topnav from "@/components/navigation/Topnav"
import ClientWrapper from "@/components/navigation/ClientWrapper"
import Footer from "@/components/navigation/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  description: "Genshin Impact Database",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1739492299738628"/>
      </head>
      <body className={inter.className}>
        <ClientWrapper>
          <Topnav/>
          <Sidenav/>
          <main className="pageContentContainer">
            {children}
            {/* <Footer/> */}
          </main>
        </ClientWrapper>
        
      </body>
      <script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1739492299738628"
        crossOrigin="anonymous"
      ></script>
    </html>
  )
}