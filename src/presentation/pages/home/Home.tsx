import { Joji } from '../components/artist/Artist'
import { ArtistSection } from '../components/artist/ArtistSection'
import styles from './style.module.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      <ArtistSection {...Joji} />
    </div>
  )
}
