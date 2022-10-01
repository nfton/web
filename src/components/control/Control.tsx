import React, {CSSProperties, memo} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {Button} from "@mui/material";
import "./control.scss"
import {useNavigate} from "react-router-dom";
import {EPages} from "../../types";

export const Control: React.FC = memo(() => {
	const {height} = useWindowDimensions();
	const navigate = useNavigate()

	// @ts-ignore
	const divHeight = Math.max(height - (window.Telegram.WebApp?.viewportStableHeight || 0), 250)
	const divStyle: CSSProperties = {
		height: divHeight + 'px'
	}
	return <div style={divStyle} className="control-container">
		<Button variant="contained" size="large" className="control-play" color="primary"
		        onClick={() => navigate(EPages.GAMES)}>Play</Button>
	</div>
})