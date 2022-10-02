import {EAttributes, ECharacteristics, IGame} from '../types'

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
		key: ECharacteristics.HEALTH,
		color: '#F44336',
		icon: <FavoriteIcon color='inherit' style={{color: '#F44336'}}/>,
		title: "Health"
	},
	[ECharacteristics.TIME]: {
		key: ECharacteristics.TIME,
		color: '#4CAF50',
		icon: <TimerIcon color='inherit' style={{color: '#4CAF50'}}/>,
		title: "Time",
	},
	[ECharacteristics.SPEED]: {
		key: ECharacteristics.SPEED,
		color: '#3F51B5',
		icon: <SpeedIcon color='inherit' style={{color: '#3F51B5'}}/>,
		title: "Speed",
	},
	[ECharacteristics.STRENGTH]: {
		key: ECharacteristics.STRENGTH,
		color: '#ce8f00',
		icon: <FitnessCenterIcon color='inherit' style={{color: '#ce8f00'}}/>,
		title: "Strength",
	}
}

export const GAMES: IGame[] = [
	{
		id: 'road_rash',
		name: 'Road Rash',
		image: roadRash,
		players: 2,
		characteristics: [ECharacteristics.SPEED],
		enabled: false,
	},
	{
		id: 'master_chess',
		name: 'Master Chess',
		image: masterChess,
		players: 2,
		characteristics: [ECharacteristics.TIME],
		enabled: false,
	},
	{
		id: 'COLORS',
		name: 'Colored Words',
		image: coloredWords,
		players: 2,
		characteristics: [ECharacteristics.TIME, ECharacteristics.SPEED],
		enabled: true,
	},
	{
		id: 'mortal_kombat_mini_game',
		name: 'Mortal Kombat Mini Game',
		image: mortalKombatMiniGame,
		players: 2,
		characteristics: [ECharacteristics.STRENGTH, ECharacteristics.HEALTH],
		enabled: false,
	},
	{
		id: 't_rex_online',
		name: 'T-Rex Online',
		image: tRexOnline,
		players: 1,
		characteristics: [ECharacteristics.SPEED],
		enabled: false,
	},
	{
		id: 'woodcutter',
		name: 'Woodcutter',
		image: woodcutter,
		players: 1,
		characteristics: [ECharacteristics.STRENGTH],
		enabled: false,
	}
]
