import React from 'react'
import type { AppProps } from 'next/app'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../context/UserContext'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'




function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = React.useState<any>(null)
  React.useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(async user => {

      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef?.onSnapshot(snapshot => {
          setCurrentUser({
            ...currentUser,
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(user)
      }

    })

    return () => {
      unsubscribe()
    }
  }, [currentUser])


  return (
    <>
      <Toaster />
      <UserContext.Provider value={{ user: currentUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>)
}


export default MyApp
