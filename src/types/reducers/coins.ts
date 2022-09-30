//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { ECoin } from '../default'

//----------------------------------------------------------------------------------------------------------------------
// Coins Reducer State Types Enum
//----------------------------------------------------------------------------------------------------------------------

export enum ECoinsStateTypes {
	CURRENT_COIN = 'currentCoin',
	GAME_AMOUNT = 'gameAmount',
	TON_AMOUNT = 'tonAmount',
}

//----------------------------------------------------------------------------------------------------------------------
// Coins Reducer State Interface
//----------------------------------------------------------------------------------------------------------------------

export interface ICoinsState {
	[ECoinsStateTypes.CURRENT_COIN]: ECoin,
	[ECoinsStateTypes.GAME_AMOUNT]: number,
	[ECoinsStateTypes.TON_AMOUNT]: number,
}
