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
	[EPlayerStateTypes.CHECKROOM]: {
		[EAttributes.COLLAR]: [],
		[EAttributes.CARDIGAN]: [],
		[EAttributes.PANTS]: [
			{
				type: EAttributes.PANTS,
				name: 'blue Pants',
				image: '',
				characteristics: {
					[ECharacteristics.HEALTH]: 1,
					[ECharacteristics.SPEED]: 2,
					[ECharacteristics.STRENGTH]: 0,
					[ECharacteristics.TIME]: 0,
				},
				price: 10
			},
			{
				type: EAttributes.PANTS,
				name: 'pink Pants',
				image: '',
				characteristics: {
					[ECharacteristics.HEALTH]: 1,
					[ECharacteristics.SPEED]: 2,
					[ECharacteristics.STRENGTH]: 0,
					[ECharacteristics.TIME]: 0,
				},
				price: 10
			},
		],
		[EAttributes.T_SHIRT]: [
			{
				type: EAttributes.T_SHIRT,
				name: 'pink T-shirt',
				image: '',
				characteristics: {
					[ECharacteristics.HEALTH]: 1,
					[ECharacteristics.SPEED]: 2,
					[ECharacteristics.STRENGTH]: 0,
					[ECharacteristics.TIME]: 0,
				},
				price: 10
			},
			{
				type: EAttributes.T_SHIRT,
				name: 'pink T-shirt',
				image: '',
				characteristics: {
					[ECharacteristics.HEALTH]: 1,
					[ECharacteristics.SPEED]: 2,
					[ECharacteristics.STRENGTH]: 0,
					[ECharacteristics.TIME]: 0,
				},
				price: 10
			},
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
			},
			{
				type: EAttributes.T_SHIRT,
				name: 'pink T-shirt',
				image: '',
				characteristics: {
					[ECharacteristics.HEALTH]: 1,
					[ECharacteristics.SPEED]: 2,
					[ECharacteristics.STRENGTH]: 0,
					[ECharacteristics.TIME]: 0,
				},
				price: 10
			},
			{
				type: EAttributes.T_SHIRT,
				name: 'pink T-shirt',
				image: 'https://s.getgems.io/nft/c/633846f13730a2edb21981a6/2/image.png',
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
		[EAttributes.COLLAR]: {
			type: EAttributes.COLLAR,
			name: 'yellow collar',
			image: 'https://s.getgems.io/nft/c/633846f13730a2edb21981a6/2000007/image.png',
			characteristics: {
				[ECharacteristics.HEALTH]: 1,
				[ECharacteristics.SPEED]: 2,
				[ECharacteristics.STRENGTH]: 0,
				[ECharacteristics.TIME]: 0,
			},
			price: 10
		},
		[EAttributes.CARDIGAN]: {
			type: EAttributes.CARDIGAN,
			name: 'white cardigan',
			image: 'https://s.getgems.io/nft/c/633846f13730a2edb21981a6/9/image.png',
			characteristics: {
				[ECharacteristics.HEALTH]: 1,
				[ECharacteristics.SPEED]: 2,
				[ECharacteristics.STRENGTH]: 0,
				[ECharacteristics.TIME]: 0,
			},
			price: 10
		},
		[EAttributes.PANTS]: {
			type: EAttributes.PANTS,
			name: 'green pants',
			image: 'https://s.getgems.io/nft/c/633846f13730a2edb21981a6/12/image.png',
			characteristics: {
				[ECharacteristics.HEALTH]: 0,
				[ECharacteristics.SPEED]: 0,
				[ECharacteristics.STRENGTH]: 1,
				[ECharacteristics.TIME]: 0,
			},
			price: 10
		},
		[EAttributes.T_SHIRT]: undefined,
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
			let currentFit = state[EPlayerStateTypes.CURRENT_FIT]
			if ( action.payload.type === EAttributes.CARDIGAN ) currentFit = { ...currentFit, [EAttributes.T_SHIRT]: undefined }
			if ( action.payload.type === EAttributes.T_SHIRT ) currentFit = { ...currentFit, [EAttributes.CARDIGAN]: undefined }
			currentFit = { ...currentFit, [action.payload.type]: action.payload }
			return { ...state, [EPlayerStateTypes.CURRENT_FIT]: currentFit }
		case EPlayerActionTypes.REMOVE_FIT:
			return {...state, [EPlayerStateTypes.CURRENT_FIT]: { ...state[EPlayerStateTypes.CURRENT_FIT], [action.payload]: undefined }}
		default:
			return state
	}
}
