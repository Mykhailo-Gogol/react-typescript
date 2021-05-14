import React from 'react'
import './App.css'

// Redux
import { Provider } from 'react-redux'
import { store } from './components/React-Redux/redux'

import RepositoriesList from './components/React-Redux/RepositoriesList'

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <h1>Search For a NPM Package</h1>
          <RepositoriesList />
        </div>
      </Provider>
    </div>
  )
}

export default App
