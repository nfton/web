//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import React, { memo, useCallback, useState } from 'react'
import { Button, Container, IconButton, Modal, TextField, Toolbar } from '@mui/material'
import {useAction, useTypedSelector} from '../../hooks'
import {ECoins} from '../../types'
import nextId from 'react-id-generator'
import {iconTon} from '../../icons'
import { theme } from '../../themes'

import './header.scss'

import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import AddIcon from '@mui/icons-material/Add'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


//----------------------------------------------------------------------------------------------------------------------
// Header Component
//----------------------------------------------------------------------------------------------------------------------

export const Header: React.FC = memo(() => {

	const {currentCoin, gameAmount, tonAmount} = useTypedSelector(state => state.coins)
	const {level} = useTypedSelector(state => state.player)
	const {switchCurrentCoin} = useAction()

	const [ isConvertWindowOpen, setConvertWindowOpen ] = useState(false)
	const [ isLevelOrderWindowOpen, setLevelOrderWindowOpen ] = useState(false)

	const handleConvertWindow = useCallback(() => {
		setConvertWindowOpen((prev) => !prev)
	}, [ setConvertWindowOpen ])

	const handleLevelOrderWindow = useCallback(() => {
		setLevelOrderWindowOpen((prev) => !prev)
	}, [ setLevelOrderWindowOpen ])

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
					<Modal open={isLevelOrderWindowOpen} onClose={handleLevelOrderWindow}>
						<></>
					</Modal>
				</div>
				<div className="balance">
					<IconButton
						id={ nextId('header-') }
						className="plus"
						color="secondary"
						onClick={handleConvertWindow}
					>
						<AddIcon />
					</IconButton>
					<Modal open={isConvertWindowOpen} onClose={handleConvertWindow}>
						<div className="converting-window" style={ { backgroundColor: theme.palette.background.default } }>
							<div className="converting-window__coin">
								<TextField
									value={ 10 }
									fullWidth
									hiddenLabel
									type="number"
									id="outlined-basic"
									variant="outlined"
								/>
								<div className="converting-window__coin__icon" style={{ color: theme.palette.secondary.main }}>
									{ iconTon }
								</div>
							</div>
							<div className="converting-window__arrows">
								<KeyboardDoubleArrowDownIcon color='secondary'/>
							</div>
							<div className="converting-window__coin">
								<TextField
									value={ 10000 }
									fullWidth
									hiddenLabel
									type="number"
									id="outlined-basic"
									variant="outlined"
								/>
								<div className="converting-window__coin__icon">
									<LocalAtmIcon color='secondary' fontSize='large'/>
								</div>
							</div>
							<Button variant="contained">Convert</Button>
						</div>
					</Modal>
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
