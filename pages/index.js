import React from 'react';
import Head from 'next/head'

import GlobalStyle from './../style/Global';
import Navigation from './../components/navigation'
import Banner from './../components/banner'
import Footer from './../components/footer'

export default function Home() {
  return (
    <React.Fragment>
      <Head>	
      	<link rel="preconnect" href="https://fonts.gstatic.com" />
	  	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      	<title>Site Casa</title>
      </Head>
      
      <GlobalStyle />
      <Navigation />
      <Banner />
      <Footer />
    </React.Fragment>
  )
}
