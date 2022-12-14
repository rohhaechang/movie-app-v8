import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Navbar */}

      <Navbar />

      {/* Result */}

      <Result results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending"
  const request = await fetch(`
    https://api.themoviedb.org/3${requests[genre].url}
  `).then(response => response.json());
  console.log(context);
  return {
    props: {
      results: request.results,
    }
  }
}

// 파라미터인 context의 context.query는 현재 url에 있는 A=B 형식을 모두 가져오고, context.query.A는 B가 된다