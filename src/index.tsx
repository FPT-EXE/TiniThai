import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { store } from '../src/shared/stores/reduxStore'

import theme from './shared/theme/CustomMUI'
import App from './App'
import 'react-toastify/ReactToastify.min.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
				<ToastContainer />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
