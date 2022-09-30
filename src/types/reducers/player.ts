//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Types Enum
//----------------------------------------------------------------------------------------------------------------------

export enum EPlayerStateTypes {
	LEVEL = 'level',
}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer State Interface
//----------------------------------------------------------------------------------------------------------------------

export interface IPlayerState {
	[EPlayerStateTypes.LEVEL]: number,
}
