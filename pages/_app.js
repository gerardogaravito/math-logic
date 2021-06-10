import { GlobalStyle } from 'globalStyles/globalStyles'
import { Layout } from 'components/Layout'

function MyApp({ Component, pageProps }) {

  // const [loading, setLoading] = useState()

  // useEffect(setLoading(false),[])

  return(
      <Layout>
        <GlobalStyle />
        {/* { 
        loading? <Loader/> :
        <Component {...pageProps} />
        } */}
        <Component {...pageProps} />
      </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp