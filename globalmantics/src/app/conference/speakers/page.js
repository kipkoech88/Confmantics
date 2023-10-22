import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Welcome to GlobalMantics Speakers</h1>
      <h2>
        <Link href='/conference'>Back to Conference</Link>
      </h2>
    </div>
  )
}

export default page
