import { FC, Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Layout from './shared/components/Layout'
import CourseList from './pages/Courses/CourseList'
import CourseDetail from './pages/CourseDetail/CourseDetail'
import LessonDetail from './pages/LessonDetail/LessonDetail'


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
					<Route path="/home" element={
						<Layout>
							<Home />
						</Layout>
					} />
					<Route path="/cart" element={
						<Layout>
							<Cart />
						</Layout>
					} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
