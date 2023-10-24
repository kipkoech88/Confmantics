import Link from 'next/link'
import styles from '../conference.module.css'

async function fetchsessions() {
  const res = await fetch("https://raw.githubusercontent.com/adhithiravi/Consuming-Graphql-Apollo/master/api/data/sessions.json",
  {cache : "no-store"}
  )

  const data = await res.json()

  return data
}


const page = async () => {

  const data = await fetchsessions();

  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 py-1 text-sm font-medium tabular-nums'>
        Last Rendererd: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to GlobalMantics Sessions</h1>
      {data.sessions.map(({id, title, description, room, day, track, speakers}) => (
        <div key= {id} className={styles.infoContainer}>
          <h3 className={styles.titleText}>{title}</h3>
          {speakers && speakers.map(({name})=(
            <h3 className={styles.titleText}>Speaker: {name}</h3>
          ))}
          <h5 className={styles.descText}>{description}</5>
          <h4 className={styles.infoText}>{room}</h4>
          <h4 className={styles.infoText}>{day}</h4>
          <h4 className={styles.infoText}>{track}</h4>
        </div>
      ))}
      <h2>
        <Link href='/conference'>Back to Conference</Link>
      </h2>
    </div>
  )
}

export default page
