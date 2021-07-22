import '../styles/globals.css'
import firebase from 'firebase/app'
import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout.component'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import { UserContext } from '../context/UserContext'
import { Toaster } from 'react-hot-toast'




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
  }, [])

  // React.useEffect(() => {
  //   console.log(currentUser)
  // }, [currentUser])

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
