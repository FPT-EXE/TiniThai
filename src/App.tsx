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
import Payment from './pages/Payment'
import { CoursesManagement, PaymentsManagement, UsersManagement } from './pages/Admin'


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
					<Route path="/payment" element={
						<Layout>
							<Payment />
						</Layout>
					} />
					<Route path="/admin/courses" element={
						<Layout>
							<CoursesManagement />
						</Layout>
					} />
					<Route path="/admin/users" element={
						<Layout>
							<UsersManagement />
						</Layout>
					} />
					<Route path="/admin/payments" element={
						<Layout>
							<PaymentsManagement />
						</Layout>
					} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
