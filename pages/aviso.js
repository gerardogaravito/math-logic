import React, { Fragment } from 'react'
import Head from 'next/head'
import { AvisoComponent } from '@components/AvisoComponent'

const Aviso = () => {
  return (
    <Fragment>
      <Head>
        <title>Math-Logic | Política de Privacidad</title>
        <link rel="shortcut icon" href="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <AvisoComponent />
      
    </Fragment>
  )
}

export default Aviso;
