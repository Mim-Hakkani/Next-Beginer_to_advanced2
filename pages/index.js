import Head from 'next/head'
import Events from '../Components/Events/Events'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Home pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
          
      <Events />

      
    </div>
  )
}
