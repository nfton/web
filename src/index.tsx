//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import router from "./router";
import reportWebVitals from './reportWebVitals';
import store from './store'
import { darkTheme, lightTheme } from './themes';
import { Header } from './components'

import './index.scss';

//----------------------------------------------------------------------------------------------------------------------
// Fonts
//----------------------------------------------------------------------------------------------------------------------

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//----------------------------------------------------------------------------------------------------------------------
// Root Element
//----------------------------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
// @ts-ignore
let theme = window.Telegram.WebApp.colorScheme === 'dark' ? darkTheme : lightTheme
root.render(
	<React.StrictMode>
		<Provider store={ store }>
			<ThemeProvider theme={theme}>
			<Header />
			</ThemeProvider>
			<RouterProvider router={ router } />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
