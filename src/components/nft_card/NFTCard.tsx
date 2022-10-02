import React, {memo} from "react";
import {Card, CardActions, CardMedia, Chip} from "@mui/material";
import {ECharacteristics, INFTCard} from "../../types";
import "./nft_card.scss"
import {CHARACTERISTICS} from "../../data";
import {theme} from "../../themes";
import LocalAtmIcon from '@mui/icons-material/LocalAtm'

const NFTCard: React.FC<INFTCard> = memo((props: INFTCard) => {
	return <Card variant="outlined" className="nft-card" style={{backgroundColor: theme.palette.background.default}}>
		<CardMedia
			style={{objectFit: 'cover'}}
			component="img"
			height="120"
			width="100"
			image={props.image}
			alt={props.type}
		/>
		<div className="nft-card-name"><strong>{props.name}</strong></div>
		<CardActions className="nft-card-actions">
			{Object.keys(props.characteristics).filter((el: string) => props.characteristics[el as ECharacteristics] > 0).map(el =>
				<Chip label={props.characteristics[el as ECharacteristics]} icon={CHARACTERISTICS[el as ECharacteristics].icon}
				      size="small" variant="outlined"
				      style={{borderColor: CHARACTERISTICS[el as ECharacteristics].color}}/>)}
		</CardActions>
		{props.price! > 0 && <CardActions className="nft-card-price">
			<Chip label={props.price} icon={<LocalAtmIcon/>} size="small" variant="outlined" style={{width: '100%'}}/>
		</CardActions>}

	</Card>
})

export default NFTCard