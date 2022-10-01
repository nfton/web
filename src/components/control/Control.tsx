import React, { CSSProperties, memo } from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "@mui/material";
import useWindowDimensions from '../../hooks/useWindowDimensions'
import {EPages} from "../../types"
import { theme } from '../../themes'

import "./control.scss"

export const Control: React.FC = memo(() => {
	const { height } = useWindowDimensions()
	const navigate = useNavigate()

	// @ts-ignore
	const divHeight = Math.max(height - (window.Telegram.WebApp?.viewportStableHeight || 0) - 80, 250)
	const divStyle: CSSProperties = {
		height: divHeight + 'px',
		backgroundColor: theme.palette.primary.dark
	}
	return <div style={ divStyle } className="control-container">
		<Button
			variant="contained"
			size="large"
			className="button"
			color="primary"
			onClick={ () => navigate(EPages.GAMES) }
		>
			Play games
		</Button>
	</div>
})
