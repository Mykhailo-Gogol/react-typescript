import React from 'react'
import './App.css'

import MoreTypes from './components/Basics/ReactContext&Portal/MoreTypes'

import NPMPackages from './components/Basics/React-Redux'

import JBook from './components/React-Esbuild'

const App: React.FC = () => {
  return (
    <div>
      <JBook />
      <NPMPackages />
      {/* <div><h1>Search For a NPM Package</h1></div> */}
      <MoreTypes />
    </div>
  )
}

export default App
