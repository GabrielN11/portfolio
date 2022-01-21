import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { GlobalContext } from '../components/GlobalContext'
import ImageZoom from '../components/Projects/ImageZoom'
import ScrollTop from '../components/ScrollTop'

const Main = () => {
  const [transition, setTransition] = React.useState(false)
  const [image, setImage] = React.useState(false)
  const { mode } = React.useContext(GlobalContext)
  
  return (
    <>
      <Head>
        <title>Gabriel Nunes</title>
        <meta name='description' content='Front End developer with a passion for developing modern, responsive and pleasant websites with a great UI/UX'></meta>
      </Head>
      <Header setTransition={setTransition}/>
      <About/>
      <Skills/>
      <Projects image={image} setImage={setImage}/>
      <Contact />
      <ScrollTop mode={mode}/>
      <div className={!transition ? 'none' : 'fadeInFadeOut'} />
      {image && <ImageZoom image={image} mode={mode} setImage={setImage} />}
    </>
  )
}

export default Main
