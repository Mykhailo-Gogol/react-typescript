import React from 'react'
import './App.css'

import ReactRedux from './components/React-Redux/'
import JBook from './components/React-Esbuild'

const App: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Search For a NPM Package</h1>
        <ReactRedux />
        <JBook />
      </div>
    </div>
  )
}

export default App
