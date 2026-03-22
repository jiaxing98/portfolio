import { Joji } from '@/presentation/components/artist/Artist'
import { ArtistSection } from '@/presentation/components/artist/ArtistSection'
import styles from './style.module.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      <ArtistSection {...Joji} />
    </div>
  )
}
