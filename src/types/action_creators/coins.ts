//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import {ECoins} from '../default'

//----------------------------------------------------------------------------------------------------------------------
// Coins Action Types Enum
//----------------------------------------------------------------------------------------------------------------------

export enum ECoinsActionTypes {
	SET_CURRENT_COIN = 'COINS.SET_CURRENT_COIN',
	SWITCH_CURRENT_COIN = 'COINS.SWITCH_CURRENT_COIN',
	UPDATE_TON_BALANCE = "COINS.UPDATE_TON_BALANCE",
	UPDATE_TOKEN_BALANCE = "COINS.UPDATE_TOKEN_BALANCE"
}

//----------------------------------------------------------------------------------------------------------------------
// Coins Action Interfaces
//----------------------------------------------------------------------------------------------------------------------

interface ICoinsSetCurrentCoinAction {
	type: ECoinsActionTypes.SET_CURRENT_COIN,
	payload: ECoins
}

interface ICoinsUpdateTokenBalance {
	type: ECoinsActionTypes.UPDATE_TOKEN_BALANCE,
	payload: number
}

interface ICoinsUpdateTonBalance {
	type: ECoinsActionTypes.UPDATE_TON_BALANCE,
	payload: number
}

interface ICoinsSwitchCurrentCoinAction {
	type: ECoinsActionTypes.SWITCH_CURRENT_COIN
}

//----------------------------------------------------------------------------------------------------------------------
// Coins Actions Types
//----------------------------------------------------------------------------------------------------------------------

export type TCoinsActions =
	ICoinsSetCurrentCoinAction
	| ICoinsSwitchCurrentCoinAction
	| ICoinsUpdateTokenBalance
	| ICoinsUpdateTonBalance
