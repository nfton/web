import React, { memo } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { theme } from '../themes'
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
					<Card key={game.id} variant={"outlined"}>
						<CardMedia
							component="img"
							height={100}
							image={game.image}
							alt={game.name}
						/>
						<CardContent sx={{padding: '10px 10px 3px 10px'}}>
							<Typography gutterBottom variant="h6" component="div">
								{game.name}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
			</section>
			<Typography color={theme.palette.text.disabled} variant="h6" align={"center"}
			            sx={{paddingTop: '10px'}}>SinglePlayer</Typography>
			<div className={'games-cards games-cards__multiplayer'}>
				{GAMES.filter((game) => game.players === 1).map((game) => (
					<Card key={game.id} variant={"outlined"}>
						<CardMedia
							component="img"
							height={100}
							image={game.image}
							alt={game.name}
						/>
						<CardContent sx={{padding: '10px 10px 3px 10px'}}>
							<Typography gutterBottom variant="h6" component="div">
								{game.name}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</div>)
})


export default GamesPage
