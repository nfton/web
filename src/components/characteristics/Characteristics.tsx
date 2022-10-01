import React, {memo} from "react";
import {Card, CardContent} from "@mui/material";
import './characteristics.scss'
import NFTCard from "../nft_card/NFTCard";
import {EAttributes, ECharacteristics} from "../../types";

export const Characteristics: React.FC = memo(() => {
	return (
		<Card className="card" variant={"outlined"}>
			<CardContent sx={{padding: '1rem 1rem 2rem 2rem'}}>

			</CardContent>
		</Card>
	)
})