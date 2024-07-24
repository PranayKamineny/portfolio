import React from 'react'
import Header from '../../components/Header'
import Experience from '../../components/Experience'
import Footer from '../../components/Footer'

function ExpHome() {
  return (
    <div className="px-32 sm:px-5 overflow-x-hidden">
        <Header page="experience"/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default ExpHome