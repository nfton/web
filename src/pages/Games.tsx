import React, { memo } from 'react'
import { theme } from '../themes'
import { GameCard } from '../components'
import { GAMES } from '../data'

import './games.scss'

const GamesPage: React.FC = memo(() => {
	return (
		<div className="games-container">
			<span className="page-heading">Games</span>
			<section className="section">
				<span className="section-heading" style={{ color: theme.palette.text.secondary }}>Multiplayer</span>
			<div className="games-cards games-cards__multiplayer">
				{GAMES.filter((game) => game.players > 1).map((game) => (
					<GameCard { ...game } key={ game.id } />
				))}
			</div>
			</section>
			<section className="section">
				<span className="section-heading" style={{ color: theme.palette.text.secondary }}>Single Games</span>
				<div className="games-cards games-cards__single">
					{GAMES.filter((game) => game.players === 1).map((game) => (
						<GameCard { ...game } key={ game.id } />
					))}
				</div>
			</section>
		</div>)
})

export default GamesPage
