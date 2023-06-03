import { FC, Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Layout from './shared/components/Layout'
import firebaseConfig from './shared/configurations/firebaseConfig'


console.log(firebaseConfig)
console.log(firebaseConfig)
console.log(firebaseConfig)
console.log(firebaseConfig)
const App: FC = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to="/login" />} />
					<Route path="/login" Component={Login} />
					<Route path="/home" element={
						<Layout>
							<Home />
						</Layout>
					} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
