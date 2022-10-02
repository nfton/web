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
		id = '346724642'
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

//----------------------------------------------------------------------------------------------------------------------
// String prototype
//----------------------------------------------------------------------------------------------------------------------

declare global {
	interface String {
		toPascalCase(): string
	}
}

String.prototype.toPascalCase = function() {
	return this.replace(/(\w)(\w*)/g, function(g0, g1, g2) {
		return g1.toUpperCase() + g2.toLowerCase()
	})
}
