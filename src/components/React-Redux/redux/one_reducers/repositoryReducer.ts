import { T_Action } from '../three_actions'

import { E_ActionType } from '../two_action_types'

interface I_RepositoryState {
  loading: boolean
  data: string[]
  errorMessage: string | null
}

const innitialState = {
  loading: false,
  errorMessage: null,
  data: [],
}

export const repositoryReducer = (
  state: I_RepositoryState = innitialState,
  action: T_Action
): I_RepositoryState => {
  switch (action.type) {
    case E_ActionType.SEARCH_REPOSITORIES_R:
      return { loading: true, errorMessage: null, data: [] }

    case E_ActionType.SEARCH_REPOSITORIES_S:
      return { loading: false, errorMessage: null, data: action.payload }

    case E_ActionType.SEARCH_REPOSITORIES_F:
      return { loading: false, errorMessage: action.payload, data: [] }

    default:
      return state
  }
}
