import React, {CSSProperties} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {Button} from "@mui/material";
import "./control.scss"

export const Control: React.FC = () => {
	const {height} = useWindowDimensions();
	// @ts-ignore
	const divHeight = Math.max(height - (window.Telegram.WebApp?.viewportStableHeight || 0), 250)
	const divStyle: CSSProperties = {
		height: divHeight + 'px'
	}
	return <div style={divStyle} className="control-container">
		<Button variant="contained" size="large" className="control-play" color="primary">Play</Button>
	</div>
}