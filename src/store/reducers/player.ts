//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { EPlayerActionTypes, EPlayerStateTypes, IPlayerState, TPlayerActions } from '../../types'

//----------------------------------------------------------------------------------------------------------------------
// Player Initial State
//----------------------------------------------------------------------------------------------------------------------

export const playerInitialState: IPlayerState = {
	[EPlayerStateTypes.LEVEL]: 0
}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer
//----------------------------------------------------------------------------------------------------------------------

export const playerReducer = (state = playerInitialState, action: TPlayerActions) => {
	switch ( action.type ) {
		case EPlayerActionTypes.SET_LEVEL:
			return { ...state, [EPlayerStateTypes.LEVEL]: action.payload }
		default:
			return state
	}
}
