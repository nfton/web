import React, { memo } from 'react'
import { Card, CardContent } from '@mui/material'
import nextId from 'react-id-generator'
import { CHARACTERISTICS } from '../../data'
import { Characteristic } from './Characteristic'
import { useTypedSelector } from '../../hooks'
import { theme } from '../../themes'
import { calcChars } from '../../utils'

import './characteristics.scss'

export const Characteristics: React.FC = memo(() => {
	const { level, currentFit } = useTypedSelector(state => state.player)

	console.log(calcChars(currentFit, level))

	return (
		<Card className="card" variant={"outlined"}>
			<CardContent sx={{minHeight: "100%", backgroundColor: theme.palette.background.default}}>
				<h4>Level {level}</h4>
				{Object.values(CHARACTERISTICS).map((char) =>
					<Characteristic key={nextId('char-in-room-')} char={char} playerLevel={ level } charsValue={1}/>
				)}
			</CardContent>
		</Card>
	)
})
