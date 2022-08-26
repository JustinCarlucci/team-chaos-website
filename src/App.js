import React from 'react'

import { Footer, Features, Calendar, WhatChaos, Header } from './containers';
import { Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <WhatChaos />
        <div className='gradient__bg-1'>
            <Features />
        </div>
        <Calendar />
        <Footer />
    </div>
  )
}

export default App;