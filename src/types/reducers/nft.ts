import {INFTCard} from "../default";

export enum INFTLocations {
	WARDROBE = 'wardrobe', MARKET = 'market'
}

export interface INFTState {
	[INFTLocations.MARKET]: INFTCard[]
	[INFTLocations.WARDROBE]: INFTCard[]
}