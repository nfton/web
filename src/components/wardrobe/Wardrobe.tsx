import React, {CSSProperties, memo} from 'react'
import nextId from 'react-id-generator'
import {Box, Tab, Tabs} from '@mui/material'
import {useTypedSelector, useWindowDimensions} from '../../hooks'
import {EAttributes} from '../../types'
import {theme} from '../../themes'
import NFTCard from '../nft_card/NFTCard'

import './wardrobe.scss'

export const Wardrobe: React.FC = memo(() => {
	const {checkroom, currentFit} = useTypedSelector(state => state.player)
	const {height} = useWindowDimensions()

	const divStyle: CSSProperties = {
		height: (height - (height * 0.4) - 80 - 70) + 'px',
		backgroundColor: theme.palette.background.paper
	}

	const [value, setValue] = React.useState("tShirt");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return <div style={divStyle} className="wardrobe-container">
		<Box>
			<Tabs
				centered
				value={value}
				className="tabs"
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				variant="scrollable"
				scrollButtons={false}
				aria-label="scrollable auto tabs example"
			>
				{Object.values(EAttributes).map((item) =>
					<Tab key={item} value={item} label={item}/>
				)}
			</Tabs>
		</Box>
		<div className="cards">
			{checkroom[value as EAttributes]?.map((item) => (
					<NFTCard
						{...item}
						key={nextId('wardrobe-card-')}
						selected={item.image === currentFit[value as EAttributes]?.image}
					/>
				)
			)
			}
		</div>
	</div>
})
