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

export interface IGame {
	characteristics: ECharacteristics[],
	description?: string,
	id: string
	image: string,
	name: string
	players: number,
}
