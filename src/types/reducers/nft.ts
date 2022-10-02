import {INFT} from "../default";

export enum INFTLocations {
	WARDROBE = 'wardrobe', MARKET = 'market'
}

export interface INFTState {
	[INFTLocations.MARKET]: INFT[]
	[INFTLocations.WARDROBE]: INFT[]
}
