import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Abassis Finance Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Abassis Finance Manager has been discontinued" />
        <p className="description">
          <a href="https://www.filesculptor.com/convert-csv-to-excel/">How to Convert CSV to Excel Manually or Automatically</a>
        </p>
      </main>

    </div>
  )
}
