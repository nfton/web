//----------------------------------------------------------------------------------------------------------------------
// Coins Enum
//----------------------------------------------------------------------------------------------------------------------

export enum ECoins {
	GAME = 'game',
	TON = 'ton'
}

//----------------------------------------------------------------------------------------------------------------------
// Pages Keys Enum
//----------------------------------------------------------------------------------------------------------------------

export enum EPages {
	CHECKROOM = 'checkroom',
	GAMES = 'games',
	GROUPS = 'groups',
	MARKETPLACE = 'marketplace',
}

export enum ECharacteristics {
	HEALTH = 'health',
	SPEED = 'speed',
	STRENGTH = 'strength',
	TIME = 'time',
}

export enum EAttributes {
	CARDIGAN = 'cardigan',
	T_SHIRT = 't-shirt',
	PANTS = 'pants',
	COLLAR = 'collar',
}

export interface ICharacteristics {
	[ECharacteristics.HEALTH]: number,
	[ECharacteristics.SPEED]: number,
	[ECharacteristics.STRENGTH]: number,
	[ECharacteristics.TIME]: number,
}

export interface IGame {
	characteristics: ECharacteristics[],
	description?: string,
	id: string
	image: string,
	name: string
	players: number,
}


export interface INFTCard {
	type: EAttributes
	image: string
	characteristics: ICharacteristics
	price?: number
}