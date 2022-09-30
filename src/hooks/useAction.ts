//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import * as actionCreators from '../store/action_creators'

//----------------------------------------------------------------------------------------------------------------------
// Use Action Hook
//----------------------------------------------------------------------------------------------------------------------

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actionCreators, dispatch)
}
