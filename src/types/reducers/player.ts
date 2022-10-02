//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Types Enum
//----------------------------------------------------------------------------------------------------------------------

import { EAttributes, IFit, INFT } from '../default'

export enum EPlayerStateTypes {
	LEVEL = 'level',
	CURRENT_FIT = 'currentFit',
	CHECKROOM = 'checkroom'
}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Interface
//----------------------------------------------------------------------------------------------------------------------

export interface IPlayerState {
	[EPlayerStateTypes.LEVEL]: number,
	[EPlayerStateTypes.CHECKROOM]: {
		[EAttributes.COLLAR]?: INFT[],
		[EAttributes.CARDIGAN]?: INFT[],
		[EAttributes.PANTS]?: INFT[],
		[EAttributes.T_SHIRT]?: INFT[],
	},
	[EPlayerStateTypes.CURRENT_FIT]: IFit,
}
