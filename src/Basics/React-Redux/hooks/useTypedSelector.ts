import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { T_Root_State } from '../redux'

export const useTypedSelector: TypedUseSelectorHook<T_Root_State> = useSelector
