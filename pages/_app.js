import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { useEffect } from 'react';
import Layout from '../components/Layout'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return  (
  <Layout> 
     <Head> 
     <link rel="icon" href="favicon.ico" />
      
 </Head>
    <Component {...pageProps}/>
     </Layout>
  ) 
    
}

export default MyApp