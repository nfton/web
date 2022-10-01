//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {MemoryRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import reportWebVitals from './reportWebVitals';
import store from './store'
import {theme} from './themes'
import {Footer, Header} from './components'

import './index.scss'

//----------------------------------------------------------------------------------------------------------------------
// Fonts
//----------------------------------------------------------------------------------------------------------------------

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Home} from "@mui/icons-material";
import GamesPage from "./pages/Games";
import App from "./App";
import MainPage from './pages/Main';

//----------------------------------------------------------------------------------------------------------------------
// Root Element
//----------------------------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<div className="container">
					<MemoryRouter>
						<Header/>
						<div className="router-body">
							<Routes>
								<Route path='/' element={<MainPage/>}/>
								<Route path='/main' element={<MainPage/>}/>
								<Route path='/games' element={<GamesPage/>}/>
								<Route path='/checkroom' element={<App/>}/>
								<Route path='/games' element={<GamesPage/>}/>
							</Routes>
						</div>
						<Footer/>
					</MemoryRouter>

				</div>

			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
