import axios from 'axios'

// Redux
// Dispatch Type from 'redux'
import { Dispatch } from 'redux'
import { E_ActionType } from '../two_action_types'
import { T_Action } from '../three_actions'

export const searchRepositories =
  (term: string) => async (dispatch: Dispatch<T_Action>) => {
    dispatch({ type: E_ActionType.SEARCH_REPOSITORIES_R })

    try {
      const response = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: { text: term },
        }
      )

      const names = response.data.objects.map((result: any) => {
        return result.package.name
      })

      dispatch({
        type: E_ActionType.SEARCH_REPOSITORIES_S,
        payload: names,
      })
    } catch (error) {
      dispatch({
        type: E_ActionType.SEARCH_REPOSITORIES_F,
        payload: error.message,
      })
    }
  }
