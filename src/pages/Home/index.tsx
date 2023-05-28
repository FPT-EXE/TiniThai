import React from 'react';
import { Grid, Typography } from '@mui/material';
import { up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';

import welcomeImg from '../../assets/images/welcomeImg.svg';

import * as Styled from './styles';


const Home = () => {
	const isScreenLarge: boolean | null = useBreakpoint(up('md'));

	return (
		<Styled.Header>
			<Styled.ContentHeader container spacing={2} width={isScreenLarge ? '40%' : '90%'}>
				<Grid item xs={6}>
					<Typography
						variant='h6'
						sx={{
							color: 'white'
						}}
					>
            Sawatddi kha
					</Typography>
					<Typography
						variant='subtitle2'
						sx={{
							mb: 3,
							color: 'white'
						}}
					>
            Welcome, Mr. Daniel
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<img src={welcomeImg} alt='welcomeImage' width='auto' height='100%' />
				</Grid>
			</Styled.ContentHeader>
		</Styled.Header>
	);
};

export default Home;
