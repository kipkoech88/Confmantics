import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
     <h1>Welcome to GlobalMantics</h1>
     <Link href="/home">Home</Link>
     <Link href="/settings">Settings</Link>
    </>
  )
}
