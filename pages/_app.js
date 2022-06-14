import '../styles/globals.css'
import  'bootstrap5/src/css/bootstrap.min.css'
import 'material-symbols/index.css'


import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return ( <Layout>
  <Component {...pageProps} />
  
  </Layout>
  )
}

export default MyApp
