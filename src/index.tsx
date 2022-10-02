//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {MemoryRouter, Route, Routes} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import reportWebVitals from './reportWebVitals'
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

import GamesPage from "./pages/Games";
import MainPage from './pages/Main';
import App from "./App";

//----------------------------------------------------------------------------------------------------------------------
// Root Element
//----------------------------------------------------------------------------------------------------------------------

import {initializeApp} from "firebase/app";
import "firebase/firestore"
import CheckroomPage from "./pages/Сheckroom";
import Marketplace from "./pages/Marketplace";
import MarketplacePage from "./pages/Marketplace";

const firebaseConfig = {
	apiKey: "AIzaSyB1TpbBCEurdfA6jaJpms2SCJxPDKWuoX8",
	authDomain: "nfton-space.firebaseapp.com",
	projectId: "nfton-space",
	storageBucket: "nfton-space.appspot.com",
	messagingSenderId: "512683949682",
	appId: "1:512683949682:web:865704884c67379aa64ceb",
	measurementId: "G-4TTT53K3YL"
};

initializeApp(firebaseConfig);

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
						<div className="page">
							<Routes>
								<Route path="/" element={<MainPage/>}/>
								<Route path="/main" element={<MainPage/>}/>
								<Route path="/games" element={<GamesPage/>}/>
								<Route path="/checkroom" element={<CheckroomPage/>}/>
								<Route path="/games" element={<GamesPage/>}/>
								<Route path="/marketplace" element={<MarketplacePage/>}/>
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
