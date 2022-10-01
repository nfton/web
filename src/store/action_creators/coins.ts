//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import {Dispatch} from 'react'
import {ECoinsActionTypes, TCoinsActions} from '../../types'
import {getFirestore, doc, collection, getDoc} from "firebase/firestore"
import {RawBlockchainApi} from "tonapi-sdk-js";
//----------------------------------------------------------------------------------------------------------------------
// Switch Current Coin Action
//----------------------------------------------------------------------------------------------------------------------

export const switchCurrentCoin = () => {
	return async (dispatch: Dispatch<TCoinsActions>) => {
		dispatch({
			type: ECoinsActionTypes.SWITCH_CURRENT_COIN
		})
	}
}
export const loadBalances = () => {
	return async (dispatch: Dispatch<TCoinsActions>) => {
		let id = "null"
		try {
			// @ts-ignore
			id = window.Telegram.WebApp.initDataUnsafe.user.id.toString()
		} catch (e) {
			id = '346724642'
		}
		let user = await getDoc(doc(collection(getFirestore(), "users"), id))
		if (user.get("wallet") === undefined) {
			return;
		}
		const blockchain = new RawBlockchainApi()
		let account = await blockchain.getAccount({account: user.get("wallet")})
		let result = account.balance
		dispatch({
			type: ECoinsActionTypes.UPDATE_TON_BALANCE,
			payload: result / 1000000000
		})
		dispatch({
			type: ECoinsActionTypes.UPDATE_TOKEN_BALANCE,
			payload: user.get("nts") || 0
		})
	}
}