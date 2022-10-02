import { EAttributes, ECharacteristics, IFit } from './types'

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
