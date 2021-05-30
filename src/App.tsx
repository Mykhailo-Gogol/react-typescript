import React from 'react'
import './App.css'

import MoreTypes from './components/MoreTypes/MoreTypes'

import JBook from './components/React-Esbuild'

const App: React.FC = () => {
  return (
    <div>
      <h1>Compile</h1>
      <JBook />
      {/* <div><h1>Search For a NPM Package</h1></div> */}
      <MoreTypes />
    </div>
  )
}

export default App
