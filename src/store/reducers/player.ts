//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import {
	EAttributes,
	ECharacteristics,
	EPlayerActionTypes,
	EPlayerStateTypes,
	IPlayerState,
	TPlayerActions
} from '../../types'

//----------------------------------------------------------------------------------------------------------------------
// Player Initial State
//----------------------------------------------------------------------------------------------------------------------

export const playerInitialState: IPlayerState = {
	[EPlayerStateTypes.LEVEL]: 1,
	[EPlayerStateTypes.ADDITIONAL]: {
		[ECharacteristics.HEALTH]: 1,
		[ECharacteristics.SPEED]: 3,
		[ECharacteristics.STRENGTH]: 2,
		[ECharacteristics.TIME]: 7,
	},
	[EPlayerStateTypes.CHECKROOM]: {
		[EAttributes.COLLAR]: [],
		[EAttributes.CARDIGAN]: [],
		[EAttributes.PANTS]: [],
		[EAttributes.T_SHIRT]: [
			{
				type: EAttributes.T_SHIRT,
				name: 'Pink T-shirt',
				image: '',
				characteristics: {
					[ECharacteristics.HEALTH]: 1,
					[ECharacteristics.SPEED]: 2,
					[ECharacteristics.STRENGTH]: 0,
					[ECharacteristics.TIME]: 0,
				},
				price: 10
			}
		]
	},
	[EPlayerStateTypes.CURRENT_FIT]: {
		[EAttributes.COLLAR]: undefined,
		[EAttributes.CARDIGAN]: undefined,
		[EAttributes.PANTS]: undefined,
		[EAttributes.T_SHIRT]: {
			type: EAttributes.T_SHIRT,
			name: 'Pink T-shirt',
			image: '',
			characteristics: {
				[ECharacteristics.HEALTH]: 1,
				[ECharacteristics.SPEED]: 2,
				[ECharacteristics.STRENGTH]: 0,
				[ECharacteristics.TIME]: 0,
			},
			price: 10
		},
	}
}

//----------------------------------------------------------------------------------------------------------------------
// Player Reducer
//----------------------------------------------------------------------------------------------------------------------

export const playerReducer = (state = playerInitialState, action: TPlayerActions) => {
	switch (action.type) {
		case EPlayerActionTypes.SET_LEVEL:
			return {...state, [EPlayerStateTypes.LEVEL]: action.payload}
		case EPlayerActionTypes.SET_NEW_FIT:
			return {...state, [EPlayerStateTypes.CURRENT_FIT]: { ...state[EPlayerStateTypes.CURRENT_FIT], [action.payload.type]: action.payload }}
		default:
			return state
	}
}
