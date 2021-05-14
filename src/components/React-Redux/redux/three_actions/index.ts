import { E_ActionType } from '../two_action_types/index'

interface I_Search_Repositories_Action_R {
  type: E_ActionType.SEARCH_REPOSITORIES_R
}
interface I_Search_Repositories_Action_S {
  type: E_ActionType.SEARCH_REPOSITORIES_S
  payload: string[]
}
interface I_Search_Repositories_Action_F {
  type: E_ActionType.SEARCH_REPOSITORIES_F
  payload: string
}

export type T_Action =
  | I_Search_Repositories_Action_R
  | I_Search_Repositories_Action_S
  | I_Search_Repositories_Action_F
