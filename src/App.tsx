import React from 'react'
import './App.css'

import MoreTypes from './components/Basics/MoreTypes/MoreTypes'

import NPMPackages from './components/Basics/React-Redux'

import JBook from './components/React-Esbuild'

const App: React.FC = () => {
  return (
    <div>
      <h1>Compile</h1>
      <JBook />
      <NPMPackages />
      {/* <div><h1>Search For a NPM Package</h1></div> */}
      <MoreTypes />
    </div>
  )
}

export default App
