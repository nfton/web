import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
	palette: {
		primary: {
			main: '#08C',
			light: '#083449',
			dark: '#10242E',
			contrastText: '#FFF'
		},
		secondary: {
			main: '#ED8E00',
			contrastText: '#dcdcdc'
		},
		background: {
			default: '#EEE',
			paper: '#DCDCDC'
		},
		text: {
			secondary: '#A1A1A1',
			disabled: '#B3B3B3',
			primary: '#1A1A1A'
		}
	}
});
