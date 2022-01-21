import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { GlobalContext } from '../components/GlobalContext'
import ScrollTop from '../components/ScrollTop'

const Main = () => {
  const { mode } = React.useContext(GlobalContext)

  return (
    <>
      <Head>
        <title>Gabriel Nunes</title>
        <meta name='description' content='Front End developer with a passion for developing modern, responsive and pleasant websites with a great UI/UX'></meta>
      </Head>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollTop mode={mode} />
    </>
  )
}

export default Main
