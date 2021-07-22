import styles from '../styles/Home.module.scss'
import DirectoryMenu from '../components/Directory'

export default function Home() {
  return (
    <div className={styles.home_page}>
      <DirectoryMenu />
    </div>
  )
}
