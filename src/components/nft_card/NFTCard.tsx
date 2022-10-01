import React, {memo} from "react";
import {Card, CardActionArea, CardActions, CardMedia, Chip} from "@mui/material";
import {INFTCard} from "../../types";
import "./nft_card.scss"

const NFTCard: React.FC<INFTCard> = memo((props) => {
	return <Card variant="outlined" className="nft-card">
		<CardMedia
			style={{objectFit: 'cover'}}
			component="img"
			height="120"
			width="100"
			image={props.image}
			alt={props.type}
		/>
		<CardActions>
			<Chip label="Chip Filled" />
		</CardActions>
	</Card>
})

export default NFTCard