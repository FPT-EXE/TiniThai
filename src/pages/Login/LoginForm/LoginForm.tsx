import { Button, Grid, Typography } from '@mui/material'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { up } from 'styled-breakpoints'
import { useNavigate } from 'react-router-dom'

import login from '../../../../public/images/login.svg'
import GoogleIcon from '../../../../public/images/GoogleLogo.svg'
import firebaseSvc from '../../../shared/services/FirebaseService'
import RestService from '../../../shared/rest/RestService'
import { useAppDispatch } from '../../../shared/utils/reduxHook'
import { setAccessToken } from '../../../shared/slices/authSlice'

import * as Styled from './styles'


const LoginForm = () => {
	const dispatch = useAppDispatch()
	const isScreenLarge: boolean | null = useBreakpoint(up('md'))
	const navigate = useNavigate()
	const onSignInGoogle = async () => {
		const token = await firebaseSvc.signInWithGoogle()
		if (!token) {
			console.log('Failed to sign in Google')
			return
		}
		dispatch(setAccessToken(token))
		RestService.setAuthorizationHeader(token)
		try {
			await RestService.post(process.env.BACKEND_ENDPOINT + '/auth/login')
			navigate('/home')
		} catch {
			navigate('/login')
		}
	}
	return (
		<Styled.PaperLogin>
			<Styled.ImageSpace>
				<img src={login} alt='Login' width='80%' />
			</Styled.ImageSpace>
			<Typography
				variant={isScreenLarge ? 'h4' : 'h5'}
				sx={{
					mb: 1,
					fontWeight: 600,
					color: 'grey.800',
					textDecoration: 'none'
				}}
			>
        Welcome to Tiny Thai
			</Typography>
			<Typography
				variant='subtitle1'
				sx={{
					mb: 1,
					color: 'grey.600'
				}}
			>
              Explore more about Thai Culture
			</Typography>

			<Button
				onClick={onSignInGoogle}
				fullWidth
				variant='contained'
				size='large'
				sx={{
					mt: 1,
					mb: 1,
					backgroundColor: '#ffffff',
					color: 'grey.600',
					justifyContent: 'left',
					textTransform: 'none',
					'&:hover': { background: '#ffffff' }
				}}
			>
				<Grid container sx={{ height: '40px' }}>
					<Grid item xs={3}>
						<img src={GoogleIcon} alt='Google' width='30px'></img>
					</Grid>
					<Grid item xs={9}>
						<Typography
							variant='subtitle2'
							sx={{ mt: 1 }}
						>
              Sign up with your Google account
						</Typography>
					</Grid>
				</Grid>
			</Button>
		</Styled.PaperLogin>
	)
}

export default LoginForm
