import React from 'react';
import Head from 'next/head'
import LoadingScreen from './loading'

import Header from './header/'
import About from './about/'
import AboutProject from './aboutProject/'
import Skills from './skills/'
import MoreSkills from './moreSkills/'
import Portfolio from './portfolio/'
import Contact from './contact/'
import Footer from './footer/'

export default class OnePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
    };
  }

  componentDidMount() {
    window.onscroll = function () {
      var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-indicator').style.width = scrolled + '%';
    };
  }

  // LoadingPage = () => {
  //   let loadElement = document.querySelector('#page-loading');

  //   setTimeout(() => {
  //     loadElement.parentElement.removeChild(loadElement);
  //   }, 4000);

  // }

  render() {

    return (
      <>
        <Head>
          <title>Uriel - Portfólio</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta name="description" content="Portfólio oficial do Desenvolvedor Full Stack e UI Designer Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos." />
        </Head>
        {/* <LoadingScreen /> */}
        <>
          <div className="fixed top-0 w-full bg-transparent">
				      <div className="h-2 bg-gradient-to-r from-degrade-color1 via-degrade-color2 to-degrade-color3" id="scroll-indicator"></div>
		      </div>
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
}