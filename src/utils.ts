//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { EAttributes, ECharacteristics, IFit } from './types'

//----------------------------------------------------------------------------------------------------------------------
// Get User ID Function
//----------------------------------------------------------------------------------------------------------------------

export function getId(): string {
	let id = "null"
	try {
		// @ts-ignore
		id = window.Telegram.WebApp.initDataUnsafe.user.id.toString()
	} catch (e) {
		id = '418578633'
	}
	return id
}

//----------------------------------------------------------------------------------------------------------------------
// Calc Summary Characteristics Function
//----------------------------------------------------------------------------------------------------------------------

export function calcChars(fit: IFit, level?: number) {
	let result: { [key in ECharacteristics]: number } = Object.create({})

	for ( let key in ECharacteristics ) {
		result = { ...result, [ECharacteristics[key as keyof typeof ECharacteristics]]: level || 0 }
	}

	for ( let key in fit ) {
		const attrChars = fit[key as EAttributes]?.characteristics

		if ( attrChars ) {
			for ( let key in attrChars ) {
				result = { ...result, [key]: result[key as ECharacteristics] + attrChars[key as ECharacteristics]}
			}
		}
	}

	return result
}
