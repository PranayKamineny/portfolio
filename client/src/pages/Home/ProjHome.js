import React from 'react'
import Header from '../../components/Header'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'

function ProjHome() {
  return (
    <div className="px-32 sm:px-5 overflow-x-hidden">
        <Header page="projects"/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default ProjHome