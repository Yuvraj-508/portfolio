import Fotter from "./Component/Fotter";
import Navbar from "./Component/Navbar";
import "./globals.css";
import { Inter ,Outfit} from 'next/font/google'

const inter = Outfit({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" className="w-5" />
        <title>Yuvraj </title>
      </head>
       <body className={inter.className}>
        <Navbar/>
        {children}
       
      </body>
    </html>
  );
}
