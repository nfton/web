//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { useTypedSelector } from '../../hooks'

//----------------------------------------------------------------------------------------------------------------------
// Header Component
//----------------------------------------------------------------------------------------------------------------------

export const Header: React.FC = () => {

	const { currentCoin, gameAmount, tonAmount } = useTypedSelector(state => state.coins)

	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<Button />
			</Toolbar>
		</AppBar>
	)
}
