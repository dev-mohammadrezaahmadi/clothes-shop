import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from '../redux/store'
import Layout from '../components/layout/Layout'
import AuthProvider from './api/auth'
import '../styles/globals.css'
import { Router } from 'next/router'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
