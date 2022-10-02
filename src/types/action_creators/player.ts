//----------------------------------------------------------------------------------------------------------------------
// Player Action Types Enum
//----------------------------------------------------------------------------------------------------------------------

import { EAttributes, INFT } from '../default'

export enum EPlayerActionTypes {
	SET_LEVEL = 'PLAYER.SET_LEVEL',
	SET_NEW_FIT = 'PLAYER.SET_NEW_FIT',
	REMOVE_FIT = 'PLAYER.REMOVE_FIT'
}

//----------------------------------------------------------------------------------------------------------------------
// Player Action Interfaces
//----------------------------------------------------------------------------------------------------------------------

interface IPlayerSetLevelAction {
	type: EPlayerActionTypes.SET_LEVEL,
	payload: number
}

interface IPlayerSetNewFitAction {
	type: EPlayerActionTypes.SET_NEW_FIT,
	payload: INFT,
}

interface IPlayerRemoveFitAction {
	type: EPlayerActionTypes.REMOVE_FIT,
	payload: EAttributes,
}

//----------------------------------------------------------------------------------------------------------------------
// Player Actions Types
//----------------------------------------------------------------------------------------------------------------------

export type TPlayerActions = IPlayerSetLevelAction | IPlayerSetNewFitAction | IPlayerRemoveFitAction
