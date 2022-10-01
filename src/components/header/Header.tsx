//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React, {memo, useCallback} from 'react'
import {AppBar, Button, IconButton, Toolbar} from '@mui/material'
import {useAction, useTypedSelector} from '../../hooks'
import {ECoin} from '../../types'
import nextId from 'react-id-generator'
import {iconTon} from '../../icons'
import { theme } from '../../themes'

import './header.scss'

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import AddIcon from '@mui/icons-material/Add'

//----------------------------------------------------------------------------------------------------------------------
// Header Component
//----------------------------------------------------------------------------------------------------------------------

export const Header: React.FC = memo(() => {

	const {currentCoin, gameAmount, tonAmount} = useTypedSelector(state => state.coins)
	const {level} = useTypedSelector(state => state.player)
	const {switchCurrentCoin} = useAction()

	const handleLevelOrderWindow = useCallback(() => {

	}, [])

	return (
		<div
			className="header"
			id={nextId('header-')}
			style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
		>
			<Toolbar className="header-tools">
				<div className="level">
					<Button
						id={ nextId('header-') }
						className="value"
						variant="text"
						color="inherit"
						onClick={ handleLevelOrderWindow }
						startIcon={ <ArrowCircleUpIcon color='primary' /> }
					>
						{level}
					</Button>
				</div>
				<div className="balance">
					<IconButton
						id={ nextId('header-') }
						className="plus"
						color="secondary"
					>
						<AddIcon />
					</IconButton>
				<Button
					id={ nextId('header-') }
					className="amount"
					variant="text"
					color="inherit"
					onClick={ switchCurrentCoin }
					endIcon={ currentCoin === ECoin.TON ? iconTon : <MonetizationOnIcon /> }
				>
					{ currentCoin === ECoin.TON ? tonAmount.toFixed(2) : gameAmount }
				</Button>
				</div>
			</Toolbar>
		</div>
	)
})
