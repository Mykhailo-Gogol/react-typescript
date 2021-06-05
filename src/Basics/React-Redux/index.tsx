import React from 'react'

// Comps
import RepositoriesList from './RepositoriesList'

// Redux
import { Provider } from 'react-redux'
import { store } from './redux'

const ReactRedux: React.FC = () => {
  return (
    <section>
      <Provider store={store}>
        <h1>NPM Packages</h1>
        <RepositoriesList />
      </Provider>
    </section>
  )
}

export default ReactRedux
