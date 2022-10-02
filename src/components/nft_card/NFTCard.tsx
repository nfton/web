import React, { memo, useCallback } from 'react'
import { Card, CardActions, CardMedia, Chip } from '@mui/material'
import nextId from 'react-id-generator'
import { useAction } from '../../hooks'
import { ECharacteristics, INFT } from '../../types'
import { CHARACTERISTICS } from '../../data'
import { theme } from '../../themes'

import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

import './nft_card.scss'

interface INFTCardProps extends INFT {
	selected: boolean,
	marketplace?: boolean
}

const NFTCard: React.FC<INFTCardProps> = memo((props) => {
	const { setNewFit, removeFit } = useAction()
	const { selected, type, image, name, price, characteristics, marketplace } = props

	const handleCardClick = useCallback(() => {
		if ( selected ) removeFit(type)
		else {
			const newFit: INFT = {
				type, image, name, characteristics, price
			}
			setNewFit(newFit)
		}
	}, [])

	return <Card
		variant="outlined" key={ image } className="nft-card"
		style={ { backgroundColor: theme.palette.background.default } }
	>
		<CardMedia
			style={ { objectFit: 'cover' } }
			component="img"
			height="120"
			width="100"
			image={ image }
			alt={ type }
			data-card-selected={selected}
			onClick={handleCardClick}
		/>
		{selected && <div className="nft-card-status"><TaskAltIcon color='secondary'/></div>}
		<div className="nft-card-name"><strong>{ name.toPascalCase() }</strong></div>
		<CardActions className="nft-card-actions">
			{ Object.keys(characteristics).filter((el: string) => characteristics[el as ECharacteristics] > 0)
				.map(el =>
					<Chip
						key={nextId('nft-chip-')}
						label={ characteristics[el as ECharacteristics] }
						icon={ CHARACTERISTICS[el as ECharacteristics].icon }
						size="small"
						variant="outlined"
						style={ { borderColor: CHARACTERISTICS[el as ECharacteristics].color } }
					/>) }
		</CardActions>
		{ price! > 0 && <CardActions className="nft-card-price">
      <Chip
		  label={ props.marketplace ? "buy" : "sell" }
        size="small"
        variant="outlined"
        style={ { width: '100%', backgroundColor: '#4CAF50' } }
      />
    </CardActions> }

	</Card>
})

export default NFTCard
