import React from 'react';
import Head from 'next/head'
import LoadingScreen from './loading'

import Header from './header/'
import About from './about/'
import AboutProject from './aboutProject/'
import Skills from './skills/'
import Contact from './contact/'

export default class OnePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.progressBar);
    window.addEventListener("load", this.LoadingPage);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.progressBar);
  }

  progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${scrollTotal / heightWin * 100}%`;

    this.setState({
      scroll: scroll
    });
  };

  // LoadingPage = () => {
  //   let loadElement = document.querySelector('#page-loading');

  //   setTimeout(() => {
  //     loadElement.parentElement.removeChild(loadElement);
  //   }, 4000);

  // }

  render() {

    const progressMainWrapper = {
      height: "5px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 101,
      width: "100%"
    };

    const progressMainStyle = {
      height: "5px",
      background: "linear-gradient(to right, #c824ac, #1961f9, #00d1d2)",
      width: this.state.scroll
    };

    return (
      <>
        <Head>
          <title>Uriel - Portfólio</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta name="description" content="Portfólio oficial do Desenvolvedor Full Stack e UI Designer Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos." />
        </Head>
        {/* <LoadingScreen /> */}
        <>
          <div className="progress-bar" style={progressMainWrapper}><div style={progressMainStyle} /></div>
          <Header />
          <About />
          <AboutProject />
          <Skills />
          <Contact />
        </>
        )
      </>
    )
  }
}