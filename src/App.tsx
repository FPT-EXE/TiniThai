import { FC, Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import CourseDetail from './pages/CourseDetail'
import CourseList from './pages/Courses'
import Home from './pages/Home/'
import LessonDetail from './pages/LessonDetail'
import Login from './pages/Login/Login'
import Layout from './shared/components/Layout'


const App: FC = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" Component={Login} />
					<Route path="/home" element={<Layout><Home /></Layout> } />
					<Route path="/courses" element={<Layout><CourseList /></Layout> } />
					<Route   path="/courses/:courseId"
						loader={() => {
						}}
						action={() => {}}
						element={<Layout><CourseDetail /></Layout>} />
					<Route   path="/lessons/:lessonId"
						element={<Layout><LessonDetail /></Layout>} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
