import Link from 'next/link'
import styles from '../conference.module.css'

export let speakerJson = {}

async function fetchspeakers() {
  const res = await fetch("https://raw.githubusercontent.com/adhithiravi/Consuming-Graphql-Apollo/master/api/data/speakers.json",
  {next: {revalidate: 20}}
  )

  const data = await res.json()
  speakerJson = data
  return data
}


const page = async () => {

  const data = await fetchspeakers()

  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 py-1 text-sm font-medium tabular-nums'>
        Last Rendererd: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to GlobalMantics Speakers</h1>
      {data.speakers.map(({id, name, bio}) => (
        <div key= {id} className={styles.infoContainer}>
          <Link href={`/conference/speakers/${name}`} className={styles.bgLinks}>
          <h3 className={styles.titleText}>{name}</h3>
          </Link>
          <p className={styles.descText}>{bio}</p>
        </div>
      ))}
      <h2>
        <Link href='/conference'>Back to Conference</Link>
      </h2>
    </div>
  )
}

export default page
