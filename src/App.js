import React, { useState } from 'react'
import HomePage from './pages/homePage.js'

function App() {
  const [currentPage, setCurrentPage] = useState('/')

  return (
    <>
      { currentPage === '/' && <HomePage setCurrentPage={setCurrentPage}/>}
    </>
  )
}

export default App;
