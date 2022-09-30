//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { ECoin, ECoinsStateTypes, ICoinsState } from '../../types'
import { ECoinsActionTypes, TCoinsActions } from '../../types/action_creators/coins'

//----------------------------------------------------------------------------------------------------------------------
// Coins Initial State
//----------------------------------------------------------------------------------------------------------------------

export const coinsInitialState: ICoinsState = {
	[ECoinsStateTypes.CURRENT_COIN]: ECoin.GAME,
	[ECoinsStateTypes.GAME_AMOUNT]: 0,
	[ECoinsStateTypes.TON_AMOUNT]: 0,
}

//----------------------------------------------------------------------------------------------------------------------
// Coins Reducer
//----------------------------------------------------------------------------------------------------------------------

export const coinsReducer = (state = coinsInitialState, action: TCoinsActions) => {
	switch ( action.type ) {
		case [ECoinsActionTypes.SET_CURRENT_COIN]:
			return { ...state, [ECoinsStateTypes.CURRENT_COIN]: action.payload }
		default:
			return state
	}
}
