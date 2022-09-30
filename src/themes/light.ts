import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
	palette: {
		primary: {
			main: '#19B76B',
			light: '#bafdd8',
			dark: '#11683e',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: '#eeeeee',
			paper: '#ffffff',
		},
		text: {
			secondary: '#a1a1a1',
			disabled: '#b3b3b3',
			primary: '#1a1a1a',
		},
	}
});
