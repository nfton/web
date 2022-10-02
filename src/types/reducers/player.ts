//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Types Enum
//----------------------------------------------------------------------------------------------------------------------

import {ICharacteristics} from "../default";

export enum EPlayerStateTypes {
	LEVEL = 'level',
	ADDITIONAL = 'additional'
}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Interface
//----------------------------------------------------------------------------------------------------------------------

export interface IPlayerState {
	[EPlayerStateTypes.LEVEL]: number,
	[EPlayerStateTypes.ADDITIONAL]: ICharacteristics,
}
