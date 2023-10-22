import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Welcome to Conference page</h1>

      <h2>
        <Link href='/conference/speakers'>Speakers</Link>
      </h2>
      <h2>
        <Link href='/conference/sessions'>Sessions</Link>
      </h2>
    </div>
  )
}

export default page
