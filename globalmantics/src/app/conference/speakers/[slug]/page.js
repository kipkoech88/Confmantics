import styles from '../../conference.module.css'
import {speakerJson} from '../page'

async function fetchSpeakerInfo(params){

    const speakerInfo = speakerJson.speakers.find((speaker) => speaker.name ===  params.slug)

    return speakerInfo;
}

const page = async ({params}) => {

    const speakerInfo = await fetchSpeakerInfo();

    const [name, bio, sessions] = speakerInfo;

    return (
      <div className={styles.parentContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>About: {bio}</h5>
            {sessions && sessions.map(({name, id}) =>(
                <div key={id}>
                    <h5 className={styles.descText}>Sessions: {name}</h5>
                </div>
            )}
      </div>
    )
  }
  
  export default page