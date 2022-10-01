import React, { memo } from 'react'
import { theme } from '../../themes'
import { IGame } from '../../types'
import { CHARACTERISTICS } from '../../data'

import './game_card.scss'

export const GameCard: React.FC<IGame & { key: string}> = memo((props) => {
	const { key, id, description, image, name, characteristics } = props

	return <div className="game-card" key={ key } style={{ backgroundColor: theme.palette.background.default }}>
		<img className="image" src={ image } alt={ name } />
		<div className="game-card__footer">
			<span className="name" style={{ color: theme.palette.text.primary }}>{ name }</span>
			<div className="characteristics">
				{ characteristics.map((characteristic) => <div
					style={ { color: CHARACTERISTICS[characteristic].color } }
					className="characteristic"
					key={ CHARACTERISTICS[characteristic].title }
				>
					{ CHARACTERISTICS[characteristic].icon }
				</div>) }
			</div>
		</div>
	</div>
})
