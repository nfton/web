//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React from 'react'
import { AppBar, Toolbar, LinearProgress } from '@mui/material'

//----------------------------------------------------------------------------------------------------------------------
// Header Component
//----------------------------------------------------------------------------------------------------------------------

export const Header: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<LinearProgress variant="determinate" value={ 0 } />
			Hello
			</Toolbar>
		</AppBar>
	)
}