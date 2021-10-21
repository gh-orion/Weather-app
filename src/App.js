import React, { useState } from 'react'
import Center from './Components/Center'
import Navbar from './Components/Navbar'

function App () {
  const [city, setCity] = useState('Delhi')
  const [mode, setMode] = useState('light')

  const searchCity = (element) => {
    setCity(element)
  }
  const toggleMode = () => {
    document.body.style.backgroundColor = mode === 'light' ? '#231a35' : 'white'
    setMode(mode === 'light' ? 'dark' : 'light')
  }
    return (
      <>
        <Navbar searchCity={searchCity} mode={mode} toggleMode={toggleMode}/>
        {city.length && <Center city={city}/>}
      </>
    )
}

export default App