import styles from '../styles/Home.module.scss'
import DirectoryMenu from '../components/Directory'

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center px-4">
      <DirectoryMenu />
    </div>
  )
}
