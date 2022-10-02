import React, { memo } from 'react'
import { Box, Typography } from '@mui/material'
import './characteristics.scss'
import { CHARACTERISTICS } from '../../data'

interface ICharacteristicProps {
	char: typeof CHARACTERISTICS[keyof typeof CHARACTERISTICS],
	charsValue: number
}

export const Characteristic: React.FC<ICharacteristicProps> = memo(({
	char,
	charsValue
}: ICharacteristicProps) => {
	return (
		<div className="characteristic-container">
			<div className="characteristic">
				<div style={ { color: char.color } } className="char" key={ char.title }>
					{ char.icon }
				</div>
				<Box sx={ { width: '100%' } }>
					<Typography variant="caption" display="block" gutterBottom>
						{ char.title }
					</Typography>
					<h4>{ charsValue }</h4>
				</Box>
			</div>
		</div>
	)
})
