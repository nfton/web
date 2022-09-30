//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useAction, useTypedSelector } from '../../hooks'
import { ECoin } from '../../types'
import nextId from 'react-id-generator'
import { iconTon } from '../../icons'

import './header.scss'

//----------------------------------------------------------------------------------------------------------------------
// Header Component
//----------------------------------------------------------------------------------------------------------------------

export const Header: React.FC = () => {

	const { currentCoin, gameAmount, tonAmount } = useTypedSelector(state => state.coins)
	const { switchCurrentCoin } = useAction()

	return (
		<AppBar className="header" position="static" id={ nextId('header-') }>
			<Toolbar className="header__tools">
				<div>TODO</div>
				<div className="header__tools__balance">
					<span className="header__tools__balance__amount">{ currentCoin === ECoin.TON ? tonAmount.toFixed(2) : gameAmount }</span>
					<IconButton
						id={ nextId('header-') }
						className="header__tools__balance__coin"
						aria-label="delete"
						color="default"
						onClick={ switchCurrentCoin }
					>
						{ currentCoin === ECoin.TON ? iconTon : <MonetizationOnIcon/> }
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	)
}
