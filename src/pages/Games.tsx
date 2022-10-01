import React, {memo} from "react";
import {Game} from "../types";
import {Typography} from "@mui/material";


const games: Game[] = [
	{
		type: 'COLORS',
		image: 'https://picsum.photos/200/300',
		players: 2
	}, {
		type: 'RACE',
		image: 'https://picsum.photos/200/300',
		players: 2
	},
	{
		type: 'CHESS',
		image: 'https://picsum.photos/200/300',
		players: 2
	}, {
		type: 'WORDS',
		image: 'https://picsum.photos/200/300',
		players: 1
	}
]

const GamesPage: React.FC = () => {
	return (
		<div>
			<Typography variant="h2" gutterBottom>
				Games
			</Typography>
		</div>)
}


export default GamesPage