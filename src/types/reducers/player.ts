//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Types Enum
//----------------------------------------------------------------------------------------------------------------------

import { EAttributes, ICharacteristics, INFT } from '../default'

export enum EPlayerStateTypes {
	LEVEL = 'level',
	ADDITIONAL = 'additional',
	CURRENT_FIT = 'currentFit',
	CHECKROOM = 'checkroom'
}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Interface
//----------------------------------------------------------------------------------------------------------------------

export interface IPlayerState {
	[EPlayerStateTypes.LEVEL]: number,
	[EPlayerStateTypes.ADDITIONAL]: ICharacteristics,
	[EPlayerStateTypes.CHECKROOM]: {
		[EAttributes.COLLAR]?: INFT[],
		[EAttributes.CARDIGAN]?: INFT[],
		[EAttributes.PANTS]?: INFT[],
		[EAttributes.T_SHIRT]?: INFT[],
	},
	[EPlayerStateTypes.CURRENT_FIT]: {
		[EAttributes.COLLAR]?: INFT,
		[EAttributes.CARDIGAN]?: INFT,
		[EAttributes.PANTS]?: INFT,
		[EAttributes.T_SHIRT]?: INFT,
	},
}
