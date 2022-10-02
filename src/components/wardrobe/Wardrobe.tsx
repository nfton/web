import './wardrobe.scss'
import React, {CSSProperties, memo} from "react";
import {theme} from "../../themes";
import {Box, Tab, Tabs} from "@mui/material";
import {EAttributes, ECharacteristics} from "../../types";
import NFTCard from "../nft_card/NFTCard";

import {useWindowDimensions} from "../../hooks";

export const Wardrobe: React.FC = memo(() => {
	const {height} = useWindowDimensions()

	const divStyle: CSSProperties = {
		height: (height - (height * 0.4) - 80 - 70) + 'px',
		backgroundColor: theme.palette.background.paper
	}

	const [value, setValue] = React.useState('cardigan');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return <div style={divStyle} className="wardrobe-container">
		<Box sx={{width: '100%'}}>
			<Tabs
				value={value}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="tabs"
			>
				<Tab key="cardigan" value="cardigan" label={EAttributes.CARDIGAN}/>
				<Tab key="collar" value="collar" label={EAttributes.COLLAR}/>
				<Tab key="pants" value="pants" label={EAttributes.PANTS}/>
				<Tab key="t-shirt" value="t-shirt" label={EAttributes.T_SHIRT}/>
			</Tabs>
		</Box>
		<div className="cards">
			<NFTCard type={EAttributes.CARDIGAN} name='pink t-shirt'
			         image={"https://s.getgems.io/nft/c/633846f13730a2edb21981a6/2/image.png"}
			         characteristics={{
				         [ECharacteristics.HEALTH]: 5,
				         [ECharacteristics.SPEED]: 2,
				         [ECharacteristics.STRENGTH]: 0,
				         [ECharacteristics.TIME]: 0,
			         }} price={100}/>
		</div>

	</div>
})
