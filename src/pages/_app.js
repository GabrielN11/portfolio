import '../styles/globals.css'
import { GlobalProvider } from '../components/GlobalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
