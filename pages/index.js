import React, { Fragment } from 'react'
import Head from 'next/head'
import { Hero } from 'components/Hero'
import { Description } from 'components/Description'
import { Features } from 'components/Features'
import { PlayStore } from '@components/PlayStore'
import { Carrousell } from '@components/Carrousell'
import { Footer } from '@components/Footer'

const Home = () => {

  return(
    <Fragment>
      <Head>
        <title>Math-Logic</title>
        <link rel="shortcut icon" href="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <Hero />
      <Description />
      <Features />
      <Carrousell />
      <PlayStore />
      <Footer />
      
    </Fragment>
  )
}

export default Home;