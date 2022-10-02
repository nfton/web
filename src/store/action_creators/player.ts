//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { Dispatch } from 'react'
import { EAttributes, EPlayerActionTypes, INFT, TPlayerActions } from '../../types'

//----------------------------------------------------------------------------------------------------------------------
// Set New Fit Action
//----------------------------------------------------------------------------------------------------------------------

export const setNewFit = (payload: INFT) => {
	return async (dispatch: Dispatch<TPlayerActions>) => {
		// if ( payload.type === EAttributes.CARDIGAN ) {
		// 	dispatch({
		// 		type: EPlayerActionTypes.REMOVE_FIT,
		// 		payload: EAttributes.T_SHIRT
		// 	})
		// }
		// if ( payload.type === EAttributes.T_SHIRT ) {
		// 	dispatch({
		// 		type: EPlayerActionTypes.REMOVE_FIT,
		// 		payload: EAttributes.CARDIGAN
		// 	})
		// }
		dispatch({
			type: EPlayerActionTypes.SET_NEW_FIT,
			payload
		})
	}
}

//----------------------------------------------------------------------------------------------------------------------
// Remove Fit Action
//----------------------------------------------------------------------------------------------------------------------

export const removeFit = (payload: EAttributes) => {
	return async (dispatch: Dispatch<TPlayerActions>) => {
		dispatch({
			type: EPlayerActionTypes.REMOVE_FIT,
			payload
		})
	}
}
