import Head from 'next/head'
import Routes from './routes'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SBS TUTORIAL LAUNCHPAD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Routes/>
    </div>
  )
}
