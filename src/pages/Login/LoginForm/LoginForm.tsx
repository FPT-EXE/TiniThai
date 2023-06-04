import { Button, Grid, Typography } from '@mui/material'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { up } from 'styled-breakpoints'

import login from '../../../assets/images/login.svg'
import GoogleIcon from '../../../assets/images/GoogleLogo.svg'
import firebaseSvc from '../../../shared/services/FirebaseService'
import client from '../../../shared/rest/RestService'
import { setCookie } from '../../../shared/utils'

import * as Styled from './styles'


const doLogin = (token: string) => {
	setCookie('access_token', token, 1/24)
	client.setAuth(token)
}

const LoginForm = () => {
	const isScreenLarge: boolean | null = useBreakpoint(up('md'))
	const onSignInGoogle = async () => {
		const token = await firebaseSvc.signInWithGoogle()
		if (!token) {
			console.log('Failed to sign in Google')
			return
		}
		doLogin(token)
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
