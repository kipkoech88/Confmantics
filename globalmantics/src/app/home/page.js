import Link from 'next/link'
import Image from 'next/image'
import styles from './home.module.css'
import bgImage from '../images/home-image-1.jpg'

const page = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image src={bgImage} alt="Background  image" quality={100} placeholder='blur' sizes='100vw' fill style={{objectFit: 'cover'}} />
      </div>
      <h1 className={styles.bgHeader}>Humble beginings, the story of life</h1>
      <p className={styles.bgText}>
        How we became farmers of the future, telling stories of tommorow today
      </p>
    </>
  )
}

export default page
