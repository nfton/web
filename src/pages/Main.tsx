import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect} from "react";


const error = () => {
	// @ts-ignore
	window.Telegram.WebApp.HapticFeedback.notificationOccurred('error')
}
const warning = () => {
	// @ts-ignore
	window.Telegram.WebApp.HapticFeedback.notificationOccurred('warning')
}
const success = () => {
	// @ts-ignore
	window.Telegram.WebApp.HapticFeedback.notificationOccurred('success')
}
const changed = () => {
	// @ts-ignore
	window.Telegram.WebApp.HapticFeedback.selectionChanged()
}
const MainPage = () => {
	useEffect(() => {
		// @ts-ignore
		window.Telegram.WebApp.ready()
		// @ts-ignore
		window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy')
	}, [])
	return (<div>
		<Button component={Link} variant="contained" color="primary" to="/app">To App</Button>
		<Button variant="contained" color="secondary" onClick={error}>ERROR</Button>
		<Button variant="contained" color="secondary" onClick={success}>SUCCESS</Button>
		<Button variant="contained" color="secondary" onClick={warning}>WARNING</Button>
		<Button variant="contained" color="secondary" onClick={changed}>CHANGED</Button>
		{	/* @ts-ignore */}
		<code>{JSON.stringify(window.Telegram.WebApp.themeParams)}</code>
	</div>)
}

export default MainPage
