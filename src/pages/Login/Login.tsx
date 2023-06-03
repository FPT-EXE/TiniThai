/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Grid, Typography } from '@mui/material'
import * as React from 'react'

import GoogleIcon from '../../assets/images/GoogleLogo.svg'
import FacebookLogo from '../../assets/images/FacebookLogo.svg'
import MicrosoftLogo from '../../assets/images/MicrosoftLogo.svg'
import login from '../../assets/images/login.svg'
import firebaseSvc from '../../shared/services/FirebaseService'

import * as Styled from './styles'


interface ILoginProps {}

// eslint-disable-next-line max-lines-per-function
const Login: React.FunctionComponent<ILoginProps> = () => {
	const onSignInGoogle = async () => {
		const token = await firebaseSvc.signInWithGoogle()
		if (!token) {
			console.log('Failed to sign in Google')
			return
		} // await doLogin(token)
	}

	const onSignInFacebook = async () => {
		const token = await firebaseSvc.signInWithFacebook()

		if (!token) {
			console.log('Failed to sign in Facebook')
			return
		}

		// await doLogin(token)
	}

	const onSignInMicrosoft = async () => {
		const token = await firebaseSvc.signInWithMicrosoft()

		if (!token) {
			console.log('Failed to sign in Microsoft')
			return
		}

		// await doLogin(token)
	}

	return (
		<Styled.Login>
			<Grid container spacing={2}>
				<Grid item xs={0} md={6}>
					<Styled.ImageSpace>
						<img src={login} alt='Login' width='80%' />
					</Styled.ImageSpace>
				</Grid>

				<Grid item xs={12} md={6}>
					<Styled.Form>
						<Typography
							variant='h3'
							sx={{
								mb: 2,
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
								mb: 3,
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
								'&:hover': { background: '#ffffff' }
							}}
						>
							<Grid container sx={{ height: '40px' }}>
								<Grid item xs={3}>
									<img src={GoogleIcon} alt='Google' width='40px'></img>
								</Grid>
								<Grid item xs={9}>
									<Typography
										variant='body2'
										sx={{
											mt: 1,
											textTransform: 'capitalize'
										}}
									>
                    Google
									</Typography>
								</Grid>
							</Grid>
						</Button>

						<Button
							onClick={onSignInMicrosoft}
							fullWidth
							variant='contained'
							size='large'
							sx={{
								mt: 1,
								mb: 1,
								backgroundColor: '#2F2F2F',
								color: '#ffffff',
								justifyContent: 'left',
								'&:hover': { background: '#2F2F2F' }
							}}
						>
							<Grid container sx={{ height: '40px' }}>
								<Grid item xs={3}>
									<img src={MicrosoftLogo} alt='Microsoft' width='40px'></img>
								</Grid>
								<Grid item xs={9}>
									<Typography
										variant='body2'
										sx={{
											mt: 1,
											color: 'white',
											textTransform: 'capitalize'
										}}
									>
                    Microsoft
									</Typography>
								</Grid>
							</Grid>
						</Button>

						<Button
							onClick={onSignInFacebook}
							fullWidth
							variant='contained'
							size='large'
							sx={{
								mt: 1,
								mb: 1,
								backgroundColor: '#3B5998',
								color: '#ffffff',
								justifyContent: 'left',
								'&:hover': { background: '#3B5998' }
							}}
						>
							<Grid container sx={{ height: '40px' }}>
								<Grid item xs={3}>
									<img src={FacebookLogo} alt='Facebook' width='20px'></img>
								</Grid>
								<Grid item xs={9} alignContent='center' justifyItems='center'>
									<Typography
										variant='body2'
										sx={{
											mt: 1,
											color: 'white',
											textTransform: 'capitalize'
										}}
									>
                    Facebook
									</Typography>
								</Grid>
							</Grid>
						</Button>
					</Styled.Form>
				</Grid>
			</Grid>
		</Styled.Login>
	)
}

export default Login