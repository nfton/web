//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React, { memo, useCallback } from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { useAction, useTypedSelector } from '../../hooks'
import { ECoin } from '../../types'
import nextId from 'react-id-generator'
import { iconTon } from '../../icons'

import './header.scss'

//----------------------------------------------------------------------------------------------------------------------
// Header Component
//----------------------------------------------------------------------------------------------------------------------

export const Header: React.FC = memo(() => {

	const { currentCoin, gameAmount, tonAmount } = useTypedSelector(state => state.coins)
	const { level } = useTypedSelector(state => state.player)
	const { switchCurrentCoin } = useAction()

	const handleLevelOrderWindow = useCallback(() => {

	}, [ ])

	return (
		<AppBar className="header" position="static" id={ nextId('header-') }>
			<Toolbar className="header-tools">
				<div className="level">
					<IconButton
						id={ nextId('header-') }
						className="arrow"
						aria-label="delete"
						onClick={ handleLevelOrderWindow }
					>
					<ArrowCircleUpIcon />
					</IconButton>
					<span className="value">{level}</span>
				</div>
				<div className="balance">
					<span className="amount">{ currentCoin === ECoin.TON ? tonAmount.toFixed(2) : gameAmount }</span>
					<IconButton
						id={ nextId('header-') }
						className="coin"
						aria-label="delete"
						color="default"
						onClick={ switchCurrentCoin }
					>
						{ currentCoin === ECoin.TON ? iconTon : <MonetizationOnIcon /> }
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	)
})
