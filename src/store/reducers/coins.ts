//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import {ECoins, ECoinsActionTypes, ECoinsStateTypes, ICoinsState, TCoinsActions} from '../../types'

//----------------------------------------------------------------------------------------------------------------------
// Coins Initial State
//----------------------------------------------------------------------------------------------------------------------

export const coinsInitialState: ICoinsState = {
	[ECoinsStateTypes.CURRENT_COIN]: ECoins.GAME,
	[ECoinsStateTypes.GAME_AMOUNT]: 0,
	[ECoinsStateTypes.TON_AMOUNT]: 0,
}

//----------------------------------------------------------------------------------------------------------------------
// Coins Reducer
//----------------------------------------------------------------------------------------------------------------------

export const coinsReducer = (state = coinsInitialState, action: TCoinsActions) => {
	switch (action.type) {
		case ECoinsActionTypes.SET_CURRENT_COIN:
			return {...state, [ECoinsStateTypes.CURRENT_COIN]: action.payload}
		case ECoinsActionTypes.UPDATE_TOKEN_BALANCE:
			return {...state, [ECoinsStateTypes.GAME_AMOUNT]: action.payload}
		case ECoinsActionTypes.UPDATE_TON_BALANCE:
			return {...state, [ECoinsStateTypes.TON_AMOUNT]: action.payload}
		case ECoinsActionTypes.SWITCH_CURRENT_COIN:
			return {
				...state,
				[ECoinsStateTypes.CURRENT_COIN]: state[ECoinsStateTypes.CURRENT_COIN] === ECoins.GAME ? ECoins.TON : ECoins.GAME
			}
		default:
			return state
	}
}
