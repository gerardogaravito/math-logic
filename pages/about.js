import React, { Fragment } from 'react'
import Head from 'next/head'
import { AboutComponent } from '@components/AboutComponent'

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Math-Logic | About</title>
        <link rel="shortcut icon" href="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <AboutComponent />
      
    </Fragment>
  )
}

export default About;
