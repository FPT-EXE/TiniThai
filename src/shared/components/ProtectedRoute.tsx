import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../utils/reduxHook'


export const ProtectedRoute = ({ children } : any) => {
	const accessToken = useAppSelector((state)=> state.auth.accessToken)
	if (!accessToken) {
		// user is not authenticated
		return <Navigate to="/login" />
	}
	return children
}
