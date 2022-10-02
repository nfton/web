import React, {memo} from "react";
import {Box, LinearProgress, Typography} from "@mui/material";
import './characteristics.scss'
import {CHARACTERISTICS} from "../../data";
import {ECharacteristics} from "../../types";

interface CharacteristicProps {
	char: typeof CHARACTERISTICS[ECharacteristics.TIME];
	charValue: number;
	additionalValue: number
}

export const Characteristic: React.FC<CharacteristicProps> = memo(({
	                                                                   char,
	                                                                   charValue,
	                                                                   additionalValue
                                                                   }: CharacteristicProps) => {
	return (
		<div className="characteristic-container">
			<div className="characteristic">
				<div style={{color: char.color}} className="char" key={char.title}>
					{char.icon}
				</div>
				<Box sx={{width: '100%'}}>
					<Typography variant="caption" display="block" gutterBottom>
						{char.title}
					</Typography>
					<h4>{charValue + additionalValue}</h4>
				</Box>
			</div>
		</div>
	)
})