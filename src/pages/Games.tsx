import React, {memo} from "react";
import {Game} from "../types";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {theme} from "../themes";
import "./games.scss"

const games: Game[] = [
	{
		type: 'COLORS',
		image: 'https://picsum.photos/300/101',
		players: 2
	}, {
		type: 'RACE',
		image: 'https://picsum.photos/300/102',
		players: 2
	},
	{
		type: 'LONG LONG NAME OF A GAME',
		image: 'https://picsum.photos/300/103',
		players: 2
	},
	{
		type: 'BIRD',
		image: 'https://picsum.photos/300/105',
		players: 2
	}, {
		type: 'WORDS',
		image: 'https://picsum.photos/300/104',
		players: 1
	}, {
		type: 'STAR WARS',
		image: 'https://picsum.photos/300/106',
		players: 1
	}
]

const GamesPage: React.FC = () => {
	return (
		<div className="games-container">
			<Typography color={theme.palette.text.primary} variant="h4" align={"center"}
			            sx={{paddingTop: '10px'}}>Games</Typography>
			<Typography color={theme.palette.text.disabled} variant="h6" align={"center"}
			            sx={{paddingTop: '10px'}}>Multiplayer</Typography>
			<div className={'games-cards games-cards__multiplayer'}>
				{games.filter(e => e.players > 1).map(e => (
					<Card key={e.type} variant={"outlined"}>
						<CardMedia
							component="img"
							height={100}
							image={e.image}
							alt={e.type}
						/>
						<CardContent sx={{padding: '10px 10px 3px 10px'}}>
							<Typography gutterBottom variant="h6" component="div">
								{e.type}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
			<Typography color={theme.palette.text.disabled} variant="h6" align={"center"}
			            sx={{paddingTop: '10px'}}>Singleplayer</Typography>
			<div className={'games-cards games-cards__multiplayer'}>
				{games.filter(e => e.players === 1).map(e => (
					<Card key={e.type} variant={"outlined"}>
						<CardActionArea>
							<CardMedia
								component="img"
								height={100}
								image={e.image}
								alt={e.type}
							/>
							<CardContent sx={{padding: '10px 10px 3px 10px'}}>
								<Typography gutterBottom variant="h6" component="div">
									{e.type}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</div>
		</div>)
}


export default GamesPage