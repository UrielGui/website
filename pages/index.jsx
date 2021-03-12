import React from 'react'
import LoadingScreen from './loading'
import Head from 'next/head'

import Header from './header/'
import Sobre from './sobre/'
import Habilidades from './habilidades/'
import Contato from './contato/'

export default class OnePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      loading: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.progressBar);
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

  componentDidMount() {
    loadingTime().then(() => this.setState({ loading: false }));
  }

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
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Conheça o portfólio oficial do Desenvolvedor Front End Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos." />
        </Head>
        {this.state.loading === false ? (
          <>
            <div className="progress-bar" style={progressMainWrapper}><div style={progressMainStyle} /></div>
            <Header />
            <Sobre />
            <Habilidades />
            <Contato />
          </>
        ) : (
          <LoadingScreen />
        )}
      </>
    )
  }
}
function loadingTime() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}