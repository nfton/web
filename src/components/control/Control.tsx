import React, {CSSProperties} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {Button} from "@mui/material";
import "./control.scss"

export const Control: React.FC = () => {
	const {height} = useWindowDimensions();
	// @ts-ignore
	const divHeight = height - (window.Telegram.WebApp?.viewportStableHeight || 800)
	const divStyle: CSSProperties = {
		height: divHeight + 'px',
		position: 'fixed',
		bottom: 0,
		width: '100%',
		display: 'flex',
		justifyContent: "center",
		paddingTop: '65px',
		border: '1px solid red',
	}
	return <div style={divStyle}>
		<Button variant="contained" size="large" className="control-play">Play</Button>
	</div>
}