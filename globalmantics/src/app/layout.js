import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import styles from './rootStyle.module.css'
import './global.css'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head/>
      <body className={inter.className}>
      <header className="w-full bg-[#212121] text-[#fff]  text-center pt-[50px] px-[0px] pb-[50px] text-center">
      <h2>
        <Link className={styles.homeLink} href='/home'>Globalmantics</Link>
      </h2>
      <h2>
        <Link className={styles.menuBar} href='/blog'>Blog</Link>
      </h2>
      <h2>
        <Link className={styles.menuBar} href='/settings'>Settings</Link>
      </h2>
      <h2 className='text-large'>
        <Link className={styles.menuBar} href='/conference'>Conference</Link>
      </h2>
      </header>
      {children}
      </body>
    </html>
  )
}
