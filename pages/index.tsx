
import Head from 'next/head'
import DirectoryMenu from '../components/Directory'
import { getCollectionsFromDB } from '../firebase/firebase.utils'
import { DirectoryTypes } from '../data/directory.data'

interface HomePageProps {
  selections: DirectoryTypes[];
}

export const Home: React.FC<HomePageProps> = ({ selections }) => {
  return (
    <>
      <Head>
        <title>Clothes Shop</title>
        <meta name="description" content="Minimal and Super fast Shopping experience" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="h-full flex flex-col justify-center px-4">
        <DirectoryMenu selections={selections} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const selections = await getCollectionsFromDB('selections')
  return {
    props: {
      selections: selections.sort((a, b) => a.id - b.id)
    }
  }
}

export default Home