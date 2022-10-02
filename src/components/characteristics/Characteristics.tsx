import React, {memo} from "react";
import {Card, CardContent} from "@mui/material";
import './characteristics.scss'
import {CHARACTERISTICS} from "../../data";
import {ECharacteristics, ICharacteristics} from "../../types";
import {Characteristic} from "./Characteristic";
import {useTypedSelector} from "../../hooks";
import {theme} from "../../themes";


export const Characteristics: React.FC = memo(() => {
	const chars = [ECharacteristics.HEALTH, ECharacteristics.TIME, ECharacteristics.SPEED, ECharacteristics.STRENGTH];
	const {level, additional} = useTypedSelector(state => state.player)
	console.error(additional[ECharacteristics.HEALTH])
	return (
		<Card className="card" variant={"outlined"}>
			<CardContent sx={{minHeight: "100%", backgroundColor: theme.palette.background.default}}>
				<h4>Level {level}</h4>
				{chars.map((char) =>
					<Characteristic key={char} char={CHARACTERISTICS[char]} charValue={level} additionalValue={additional[char]}/>
				)}
			</CardContent>
		</Card>
	)
})