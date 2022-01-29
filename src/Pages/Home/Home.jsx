import React, { useEffect, useState } from 'react'
import tmdb from '../../Axios/TMDB'
import PageWrapper from '../../layout/PageWrapper'
import requests from '../../Axios/request'
import Row from '../../components/Row/Row'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    tmdb
      .get(requests.fetchActionMovies)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <PageWrapper>
      <h1>Home</h1>
      <Row
        delay={6000}
        rowTitle={'Action Movies'}
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        rowTitle={'Netflix Originals'}
        fetchURL={requests.fetchNetflixOriginals}
        delay={5000}
      />
      <Row
        rowTitle={'Romantic Movies'}
        fetchURL={requests.fetchRomanceMovies}
        delay={4000}
      />
      <Row
        rowTitle={'Top Rated Movies'}
        fetchURL={requests.fetchTopRated}
        delay={5000}
      />
      <Row
        rowTitle={'Trending Movies'}
        fetchURL={requests.fetchTrending}
        delay={4000}
      />
    </PageWrapper>
  )
}
