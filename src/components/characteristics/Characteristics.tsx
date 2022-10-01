import React, {memo} from "react";
import {Card, CardContent} from "@mui/material";
import './characteristics.scss'
import NFTCard from "../nft_card/NFTCard";
import {EAttributes, ECharacteristics} from "../../types";

export const Characteristics: React.FC = memo(() => {
	return (
		<Card className="card" variant={"outlined"}>
			<CardContent sx={{padding: '1rem 1rem 2rem 2rem'}}>
				<NFTCard type={EAttributes.CARDIGAN} image={"https://s.getgems.io/nft/c/633846f13730a2edb21981a6/0/image.png"}
				         characteristics={{
					         [ECharacteristics.HEALTH]: 5,
					         [ECharacteristics.SPEED]: 2,
					         [ECharacteristics.STRENGTH]: 0,
					         [ECharacteristics.TIME]: 0,
				         }}/>
			</CardContent>
		</Card>
	)
})