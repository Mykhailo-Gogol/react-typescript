import React from 'react'

// Comps
import RepositoriesList from './RepositoriesList'

// Redux
import { Provider } from 'react-redux'
import { store } from './redux'

const ReactRedux: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <RepositoriesList />
      </Provider>
    </div>
  )
}

export default ReactRedux
