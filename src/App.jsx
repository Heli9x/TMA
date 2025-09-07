import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import data from './assets/main.json'
function App() {

  function Footer(props){
    return(
      <footer>
        <div className='label'>
          <p>{props.label}</p>
        </div>
      </footer>
    )
  }

  const headerData = data['header']

  const footerData =data['footer']

  return (
    <>
      <div className="container">
        <Header 
          title={headerData[0]}
          subtitle={headerData[1]}
          />
        <Menu type={1}/>
        <Footer label={footerData[0]}></Footer>
      </div>
    </>
  )
}

export default App
