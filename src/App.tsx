import { FC, Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import Home from './pages/Home/Header'
import Login from './pages/Login/Login'


const App: FC = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to="/login" />} />
					<Route path="/login" Component={Login} />
					<Route path="/home" Component={Home} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
