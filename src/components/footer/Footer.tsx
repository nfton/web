import React, {memo, useEffect, useMemo} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import nextId from 'react-id-generator'
import {IconButton, Toolbar} from '@mui/material'
import {theme} from '../../themes'

import './footer.scss'

import StorefrontIcon from '@mui/icons-material/Storefront'
import PetsIcon from '@mui/icons-material/Pets'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import GamepadIcon from '@mui/icons-material/SportsEsports'
import {EPages} from '../../types'

interface IFooterTool {
	key: EPages | '',
	icon: React.ReactElement
}

const FOOTER_TOOLS: IFooterTool[] = [
	{
		key: EPages.MARKETPLACE,
		icon: <StorefrontIcon fontSize='large'/>,
	},
	{
		key: "",
		icon: <PetsIcon fontSize='large'/>,
	},
	{
		key: EPages.CHECKROOM,
		icon: <CheckroomIcon fontSize='large'/>,
	},
	{
		key: EPages.GAMES,
		icon: <GamepadIcon fontSize='large'/>,
	}
]

export const Footer: React.FC = memo(() => {
	const location = useLocation()
	const navigate = useNavigate()

	const pathname = useMemo(() => {
		return location.pathname.substring(1)
	}, [location])

	useEffect(() => {
		console.log(location)
	}, [location])

	return (
		<div
			className="footer"
			id={nextId('footer-')}
			style={{backgroundColor: theme.palette.background.default, color: theme.palette.text.primary}}
		>
			<Toolbar className="tools">
				{FOOTER_TOOLS.map((tool) =>
					<IconButton
						className="tool"
						key={nextId('footer-tool-')}
						aria-label="delete"
						color={pathname === tool.key ? 'inherit' : 'primary'}
						size="large"
						style={{backgroundColor: pathname === tool.key ? theme.palette.secondary.main : 'inherit'}}
						onClick={() => navigate('/' + tool.key)}
					>
						{tool.icon}
					</IconButton>
				)}
			</Toolbar>
		</div>
	)
})
