import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import router from "./router";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import { darkTheme, lightTheme } from './themes';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
// @ts-ignore
let theme = window.Telegram.WebApp.colorScheme === 'dark' ? darkTheme : lightTheme
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router}/>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
