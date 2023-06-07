import { FC, Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import CourseDetail from './pages/CourseDetail'
import Home from './pages/Home/'
import LessonDetail from './pages/LessonDetail'
import Login from './pages/Login/Login'
import Layout from './shared/components/Layout'


const App: FC = () => {
	console.log('test')
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" Component={Login} />
					<Route
						path="/home"
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route
						path="/courses/:courseId"
						loader={() => {}}
						action={() => {}}
						Component={CourseDetail}
					/>
					<Route path="/lessons/:lessonId" Component={LessonDetail} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
