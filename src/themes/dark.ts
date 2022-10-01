import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#08C',
			light: '#083449',
			dark: '#10242E',
			contrastText: '#FFF'
		},
		secondary: {
			main: '#ED8E00',
			contrastText: '#1A1A1A'
		},
		background: {
			default: '#0C0C0C',
			paper: '#1C1C1C',
		},
		text: {
			secondary: '#CFCFCF',
			disabled: '#B3B3B3',
			primary: '#FFF',
		}
	}
})
