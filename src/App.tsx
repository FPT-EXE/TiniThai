import { FC, Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import CourseDetail from './pages/CourseDetail'
import Home from './pages/Home/Header'
import LessonDetail from './pages/LessonDetail'
import Login from './pages/Login/Login'


const App: FC = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to="/login" />} />
					<Route path="/login" Component={Login} />
					<Route path="/home" Component={Home} />
					<Route   path="/courses/:courseId"
						loader={() => {
						}}
						action={() => {}}
						Component={CourseDetail} />
					<Route   path="/lessons/:lessonId"
						Component={LessonDetail} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
