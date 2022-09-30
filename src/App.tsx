import React from 'react';
import logo from './logo.svg';
import './App.scss';
import useWindowDimensions from "./hooks/useWindowDimensions";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function App() {
	const {height, width} = useWindowDimensions();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Size: <code>{width}x{height}</code>
				</p>
				<p>
					{	/* @ts-ignore */}
					WebApp: {window.Telegram.WebApp.version}
				</p>
				<p>
					{	/* @ts-ignore */}
					Theme: {window.Telegram.WebApp.colorScheme}
				</p>
				<Button component={Link} color="primary" to="/main">To Main</Button>
				{	/* @ts-ignore */}
				<code>{JSON.stringify(window.Telegram.WebApp.initData)}</code>
			</header>
		</div>
	);
}

export default App;
