import React from 'react'
import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import './HomeScreen.css';
import requests from '../../Request';
import Row from '../row/Row';
function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow = {true}
      />

      <Row
        title="Trending NOW"
        fetchUrl={requests.fetchTrending}
        isLargeRow ={false}
      />

      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow ={false}
      />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow ={false}
      />

      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow ={false}
      />


      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow ={false}
      />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow ={false}
      />

      <Row
        title="Documentaries"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow ={false}
      />

    </div>
  )
}

export default HomeScreen
