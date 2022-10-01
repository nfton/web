import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#08C',
			light: '#083449',
			dark: '#083449',
			contrastText: '#FFF'
		},
		secondary: {
			main: '#ED8E00',
			contrastText: '#1A1A1A'
		},
		background: {
			default: '#0C0C0C',
			paper: '#10242E'
		},
		text: {
			secondary: '#CFCFCF',
			disabled: '#B3B3B3',
			primary: '#FFF'
		}
	}
})
