//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import {ECharacteristics, EPlayerActionTypes, EPlayerStateTypes, IPlayerState, TPlayerActions} from '../../types'

//----------------------------------------------------------------------------------------------------------------------
// Player Initial State
//----------------------------------------------------------------------------------------------------------------------

export const playerInitialState: IPlayerState = {
	[EPlayerStateTypes.LEVEL]: 1,
	[EPlayerStateTypes.ADDITIONAL]: {
		[ECharacteristics.HEALTH]: 0,
		[ECharacteristics.SPEED]: 0,
		[ECharacteristics.STRENGTH]: 0,
		[ECharacteristics.TIME]: 0,
	}

}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer
//----------------------------------------------------------------------------------------------------------------------

export const playerReducer = (state = playerInitialState, action: TPlayerActions) => {
	switch (action.type) {
		case EPlayerActionTypes.SET_LEVEL:
			return {...state, [EPlayerStateTypes.LEVEL]: action.payload}
		default:
			return state
	}
}
