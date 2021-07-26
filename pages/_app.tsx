import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from '../redux/store'
import Layout from '../components/layout/Layout'
import AuthProvider from './api/auth'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <AuthProvider >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Provider>
    </>)
}


export default MyApp
