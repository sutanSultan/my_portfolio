import React from 'react'
// import Hero from './components/hero/page'
import Hero from '@/components/hero/page'
// import Contact from './components/contact'
import Contact from '@/components/contact/page'
// import Page from './components/project/page'
import Page from '@/components/project/page'
// import ABOUT from './components/about/page'
import ABOUT from '@/components/about/page'
  // import Skills from './components/skill/page'
 import Skills from '@/components/skill/page'
function Home() {
  return (
    <div>
      <Hero />
      <Page />
      <ABOUT />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
