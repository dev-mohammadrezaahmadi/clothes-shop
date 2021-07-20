import '../styles/globals.css'
import firebase from 'firebase/app'
import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout.component'
import { auth } from '../firebase/firebase.utils'
import { UserContext } from '../context/UserContext'




function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null)
  React.useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <UserContext.Provider value={{ user: currentUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>)
}


export default MyApp
