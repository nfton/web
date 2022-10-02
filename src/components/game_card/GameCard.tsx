import React, {memo, useCallback, useEffect, useState} from 'react'
import {theme} from '../../themes'
import {IGame} from '../../types'
import {CHARACTERISTICS} from '../../data'

import './game_card.scss'

export const GameCard: React.FC<IGame & { key: string } & { openModal: Function }> = memo((props) => {
	const {id, description, image, name, characteristics} = props

	const openGame = () => {
		props.openModal(id)
	}


	return <div className="game-card" key={id} style={{backgroundColor: theme.palette.background.default}}
	            onClick={openGame}>
		<img className="image" src={image} alt={name}/>
		<div className="game-card__footer">
			<span className="name" style={{color: theme.palette.text.primary}}>{name}</span>
			<div className="characteristics">
				{characteristics.map((characteristic) => <div
					style={{color: CHARACTERISTICS[characteristic].color}}
					className="characteristic"
					key={CHARACTERISTICS[characteristic].title}>
					{CHARACTERISTICS[characteristic].icon}
				</div>)}
			</div>
		</div>
	</div>
})
