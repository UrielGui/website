import React from 'react';
import Head from 'next/head'
import LoadingScreen from './loading'

import OnScroll from '../components/scroll/onScroll'
import Header from './header/'
import About from './about/'
import AboutProject from './aboutProject/'
import Skills from './skills/'
import MoreSkills from './moreSkills/'
import Portfolio from './portfolio/'
import Contact from './contact/'
import Footer from './footer/'

export default function OnePage() {

  return (
    <>
      <Head>
        <title>Uriel - Portfólio</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="Portfólio oficial do Desenvolvedor Full Stack e UI Designer Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos." />
      </Head>
      {/* <LoadingScreen /> */}
      <>
        <OnScroll />
        <Header />
        <About />
        <AboutProject />
        <Skills />
        <MoreSkills />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </>
  )
}