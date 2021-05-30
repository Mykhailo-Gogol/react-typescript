import { combineReducers } from 'redux'
import { repositoryReducer } from './repositoryReducer'

export const reducers = combineReducers({
  repositories: repositoryReducer,
})

export type T_Root_State = ReturnType<typeof reducers>
