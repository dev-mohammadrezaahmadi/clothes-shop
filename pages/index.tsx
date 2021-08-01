import styles from '../styles/Home.module.scss'
import DirectoryMenu from '../components/Directory'
import { getCollectionsFromDB } from '../firebase/firebase.utils'
import { DirectoryTypes } from '../data/directory.data'

interface HomePageProps {
  selections: DirectoryTypes[];
}

export const Home: React.FC<HomePageProps> = ({ selections }) => {
  return (
    <div className={styles.home_page}>
      <DirectoryMenu selections={selections} />
    </div>
  )
}

export async function getStaticProps() {
  const selections = await getCollectionsFromDB('selections')
  return {
    props: {
      selections
    }
  }
}

export default Home