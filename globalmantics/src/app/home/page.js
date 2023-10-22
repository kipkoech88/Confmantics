import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h2>
        <Link href='/blog'>Blog</Link>
      </h2>
      <h2>
        <Link href='/settings'>Settings</Link>
      </h2>
      <h2 className='text-large'>
        <Link href='/conference'>Conference</Link>
      </h2>
    </div>
  )
}

export default page
