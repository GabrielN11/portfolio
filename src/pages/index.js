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
  const [visible, setVisible] = React.useState({
    about: false,
    skills: false,
    contact: false,
  })
  const { mode } = React.useContext(GlobalContext)

  React.useEffect(() => {
    const about = document.querySelector('#about')
    const skills = document.querySelector('#skills')
    const contact = document.querySelector('#contact')   

    let aboutObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.7) {
        setVisible(current => ({ ...current, about: true }))
      } else if (entries[0].intersectionRatio <= 0.1) {
        setVisible(current => ({ ...current, about: false }))
      }
    }, { threshold: [0.7, 0.1] })

    let skillsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.5) {
        setVisible(current => ({ ...current, skills: true }))
      } else if (entries[0].intersectionRatio <= 0.1) {
        setVisible(current => ({ ...current, skills: false }))
      }
    }, { threshold: [0.5, 0.1] })

    let contactObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.3) {
        setVisible(current => ({ ...current, contact: true }))
      } else if (entries[0].intersectionRatio <= 0.1) {
        setVisible(current => ({ ...current, contact: false }))
      }
    }, { threshold: [0.3, 0.1] })

    aboutObserver.observe(about)
    skillsObserver.observe(skills)
    contactObserver.observe(contact)
  }, [])
  
  return (
    <>
      <Head>
        <title>Gabriel Nunes</title>
        <meta name='description' content='Front End developer with a passion for developing modern, responsive and pleasant websites with a great UI/UX'></meta>
      </Head>
      <Header setTransition={setTransition} visible={visible.header} />
      <About visible={visible.about} />
      <Skills visible={visible.skills} />
      <Projects image={image} setImage={setImage}/>
      <Contact visible={visible.contact} />
      <ScrollTop mode={mode}/>
      <div className={!transition ? 'none' : 'fadeInFadeOut'} />
      {image && <ImageZoom image={image} mode={mode} setImage={setImage} />}
    </>
  )
}

export default Main
