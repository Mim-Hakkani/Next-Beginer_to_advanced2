import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from "next/script";
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

         


  

  return <div> 
  
   <h2 >header</h2> <Component {...pageProps} /></div>
}

export default MyApp
