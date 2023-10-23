import Link from 'next/link'
import Image from 'next/image'
import styles from './conference.module.css'
import ConfImage from '../images/home-image-2.jpg'

const page = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image src={ConfImage} fill alt='Our story' style={{objectFit: 'cover'}} placeholder="blur" sizes="100vw" quality={100}/>
      </div>
      <h1 className={styles.bgHeader}>Welcome to Globalmantics Conference</h1>

      <h2 className={styles.bgText}>
        <Link href='/conference/speakers'>Speakers</Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link href='/conference/sessions'>Sessions</Link>
      </h2>
    </>
  )
}

export default page
