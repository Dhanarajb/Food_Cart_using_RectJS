import React from 'react'
import './App.css'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'

function App() {

  return (
    <div className='app'>
      <div>
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
