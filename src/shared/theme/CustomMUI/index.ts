/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from '@mui/material';


declare module '@mui/material/styles/createPalette' {
	interface Palette {
		purple: Palette['primary'];
		pink: Palette['primary'];
		white: Palette['primary'];
		green: Palette['primary'];
		gray: Palette['primary'];
		orange: Palette['primary'];
	}
	interface PaletteOptions {
		purple: PaletteOptions['primary'];
		pink: PaletteOptions['primary'];
		white: PaletteOptions['primary'];
		green: PaletteOptions['primary'];
		gray: PaletteOptions['primary'];
		orange: PaletteOptions['primary'];
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#D1B9DC',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#C2CF7B',
			contrastText: '#fff',
		},
		success: {
			main: '#28A745',
			contrastText: '#ffffff',
		},
		info: {
			main: '#17A2B8',
			contrastText: '#ffffff',
		},
		warning: {
			main: '#FFC107',
			contrastText: '#ffffff',
		},
		error: {
			main: '#DC3545',
			contrastText: '#ffffff',
		},
		purple: {
			main: '#6F42C1',
			contrastText: '#ffffff',
		},
		pink: {
			main: '#E83E8C',
			contrastText: '#ffffff',
		},
		green: {
			main: '#28A745',
			contrastText: '#ffffff',
		},
		gray: {
			main: '#495057',
			contrastText: '#ffffff',
		},
		orange: {
			main: '#f96332',
			contrastText: '#ffffff',
		},
		white: {
			main: '#FFFF',
			contrastText: '#212529',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
		},
	},
});

export default theme;
