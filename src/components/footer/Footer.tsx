import React, {useEffect} from "react";
import {AppBar, Box, Button, Fab, IconButton, styled, Toolbar} from "@mui/material";

import StorefrontIcon from '@mui/icons-material/Storefront';
import PetsIcon from '@mui/icons-material/Pets';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GroupsIcon from '@mui/icons-material/Groups';
import {useLocation} from "react-router-dom";
import "./footer.scss"

export const Footer: React.FC = () => {
	let location = useLocation();
	useEffect(() => {
		console.log(location)
	}, [location])
	return (
		<AppBar position="fixed" color="secondary" sx={{top: 'auto', bottom: 0}}>
			<Toolbar>
				<IconButton color="inherit">
					<StorefrontIcon/>
				</IconButton>
				<Box sx={{flexGrow: 2}}/>
				<IconButton color="inherit">
					<PetsIcon/>
				</IconButton>
				<Box sx={{flexGrow: 2}}/>
				<IconButton color="inherit">
					<CheckroomIcon/>
				</IconButton>
				<Box sx={{flexGrow: 2}}/>
				<IconButton color="inherit">
					<GroupsIcon/>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}