import { useEffect, useState } from 'react'
import type { Artist } from './Artist'
import styles from './style.module.css'

export const ArtistSection = ({ title, images }: Artist) => {
  const [hovering, setHovering] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!hovering) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [hovering])

  return (
    <div
      className={styles.artist}
      style={{
        backgroundImage: hovering ? `url(${images[index]})` : 'none',
      }}
    >
      <h1
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {title}
      </h1>
    </div>
  )
}
