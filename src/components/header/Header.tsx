//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React, {memo, useCallback} from 'react'
import { Button, IconButton, Toolbar} from '@mui/material'
import {useAction, useTypedSelector} from '../../hooks'
import {ECoins} from '../../types'
import nextId from 'react-id-generator'
import {iconTon} from '../../icons'
import { theme } from '../../themes'

import './header.scss'

import LocalAtmIcon from '@mui/icons-material/LocalAtm'
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
			<Toolbar className="tools">
				<div className="level">
					<Button
						id={ nextId('header-') }
						className="value"
						variant="text"
						color="inherit"
						onClick={ handleLevelOrderWindow }
						startIcon={ <ArrowCircleUpIcon className="icon" color='primary' fontSize='large' /> }
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
					endIcon={ currentCoin === ECoins.TON ? iconTon : <LocalAtmIcon className="icon" fontSize='large' /> }
				>
					{ currentCoin === ECoins.TON ? tonAmount.toFixed(2) : gameAmount.toLocaleString() }
				</Button>
				</div>
			</Toolbar>
		</div>
	)
})
