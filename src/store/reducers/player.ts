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
		[ECharacteristics.HEALTH]: 1,
		[ECharacteristics.SPEED]: 3,
		[ECharacteristics.STRENGTH]: 2,
		[ECharacteristics.TIME]: 7,
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
