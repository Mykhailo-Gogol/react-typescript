import { createStore, applyMiddleware } from 'redux'
import { reducers } from './one_reducers'
import thunk from 'redux-thunk'

export const store = createStore(reducers, {}, applyMiddleware(thunk))
