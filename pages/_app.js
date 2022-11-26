import '../styles/globals.css';
import Layout from '../components/Layout';
import ResultContextProvider from '../Contexts/ResultContextProvider';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <ResultContextProvider>

    
    <Script id="Adsense-id" data-ad-client="ca-pub-4327171076361001"
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>


        <Component {...pageProps} />
    </ResultContextProvider>
  </Layout>
  )
}

export default MyApp
