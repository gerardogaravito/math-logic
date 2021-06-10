import React from 'react'
import Head from 'next/head'
import { GlobalStyle } from 'globalStyles/globalStyles'
import { Navbar } from 'components/Navbar'
import { Hero } from 'components/Hero'

const Home = () => {

  return(
    <React.Fragment>
      <Head>
        <title>Math-Logic</title>
      </Head>
      <GlobalStyle />

      <Navbar />
      <Hero />
    </React.Fragment>
  )
}

export default Home;