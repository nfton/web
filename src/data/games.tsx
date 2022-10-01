import { ECharacteristics, IGame } from '../types'

import FavoriteIcon from '@mui/icons-material/Favorite'
import TimerIcon from '@mui/icons-material/Timer'
import SpeedIcon from '@mui/icons-material/Speed'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

import roadRash from '../images/games/road_rash.png'
import masterChess from '../images/games/master_chess.png'
import coloredWords from '../images/games/colored_words.png'
import mortalKombatMiniGame from '../images/games/mortal_kombat_mini_game.png'
import tRexOnline from '../images/games/t_rex_online.png'
import woodcutter from '../images/games/woodcutter.png'

export const CHARACTERISTICS = {
	[ECharacteristics.HEALTH]: {
		color: '#F44336',
		icon: <FavoriteIcon color='inherit' />,
		title: "Health"
	},
	[ECharacteristics.TIME]: {
		color: '#4CAF50',
		icon: <TimerIcon color='inherit' />,
		title: "Time",
	},
	[ECharacteristics.SPEED]: {
		color: '#3F51B5',
		icon: <SpeedIcon color='inherit' />,
		title: "Speed",
	},
	[ECharacteristics.STRENGTH]: {
		color: '#FFC107',
		icon: <FitnessCenterIcon color='inherit' />,
		title: "Strength",
	}
}

export const GAMES: IGame[] = [
	{
		id: 'road_rash',
		name: 'Road Rash',
		image: roadRash,
		players: 2,
		characteristics: [ ECharacteristics.SPEED ]
	},
	{
		id: 'master_chess',
		name: 'Master Chess',
		image: masterChess,
		players: 2,
		characteristics: [ ECharacteristics.TIME ]
	},
	{
		id: 'colored_words',
		name: 'Colored Words',
		image: coloredWords,
		players: 1,
		characteristics: [ ECharacteristics.TIME, ECharacteristics.SPEED ]
	},
	{
		id: 'mortal_kombat_mini_game',
		name: 'Mortal Kombat Mini Game',
		image: mortalKombatMiniGame,
		players: 2,
		characteristics: [ ECharacteristics.STRENGTH, ECharacteristics.HEALTH ]
	},
	{
		id: 't_rex_online',
		name: 'T-Rex Online',
		image: tRexOnline,
		players: 1,
		characteristics: [ ECharacteristics.SPEED ]
	},
	{
		id: 'woodcutter',
		name: 'Woodcutter',
		image: woodcutter,
		players: 1,
		characteristics: [ ECharacteristics.STRENGTH ]
	}
]
