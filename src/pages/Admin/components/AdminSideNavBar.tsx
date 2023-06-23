/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	FormatIndentDecrease,
	FormatIndentIncrease,
} from '@mui/icons-material'
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ----------------------------------------------------------------------

const links = [
	{
		name: 'Courses',
		href: '/admin/courses',
	},
	{
		name: 'Users',
		href: '/admin/users',
	},
	{
		name: 'Payments',
		href: '/admin/payments',
	},
]

export default function AdminSideNavBar() {
	const navigate = useNavigate()
	const [barSize, setBarSize] = useState<'expanded' | 'collapse'>('collapse')

	return (
		<Stack
			sx={{
				width:
          barSize === 'expanded'
          	? { xs: '100%', md: '16rem' }
          	: '3rem',
				height: barSize === 'expanded' ? '100vh' : '3rem',
				position: 'fixed',
				backgroundColor: '#fff',
				boxShadow: '0px 0px 7px 0px #000',
				top: 0,
				left: 0,
				mt: '10vh',
				overflow: 'hidden',
				transition: 'width 0.6s, height 0.3s',
				transitionTimingFunction: 'ease-in-out',
				zIndex: 99,
			}}
		>
			<Stack
				sx={{
					transition: 'all 0.5s ease-in-out',
					width: '90%',
					flexDirection: 'row',
					px: barSize === 'expanded' ? { xs: 1, md: '1rem' } : 0,
					justifyContent: { xs: 'flex-start', md: 'space-between' },
					alignItems: 'center',
					gap: 2,
				}}
			>
				{barSize === 'expanded' ? (
					<IconButton
						size="large"
						sx={{ color: 'primary.main' }}
						onClick={() => setBarSize('collapse')}
					>
						<FormatIndentDecrease />
					</IconButton>
				) : (
					<IconButton
						size="large"
						sx={{ color: 'primary.main' }}
						onClick={() => setBarSize('expanded')}
					>
						<FormatIndentIncrease />
					</IconButton>
				)}
				<Typography fontSize="1.25rem">Administration</Typography>
			</Stack>
			<Divider
				sx={{ marginY: { xs: 1, md: 3 }, borderColor: 'primary.main' }}
			/>
			<Stack
				sx={{
					width: barSize === 'expanded' ? '100%' : 0,
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2,
					opacity: barSize === 'expanded' ? 1 : 0,
					transition: 'all 0.3s ease-in-out',
					visibility:  barSize === 'expanded' ? 'visible' :'collapse'
				}}
			>
				{links.map((link) => (
					<Stack
						key={link.name}
						sx={{
							transition:'all 0.4s ease-in-out',
							boxSizing: 'border-box',
							width: '100%',
							height: '3rem',
							justifyContent: 'center',
							alignItems: 'center',
						
							// ':hover': {
							// 	backgroundColor: '#dadada',
							// },
						}}
					>
						<Box onClick={()=> navigate(link.href)}>					
							<Typography							
								sx={{
									transition:'all 0.4s ease-in-out',
									cursor: 'pointer',
									borderBottom: 'solid 3px #D1B9DC',
									paddingX: '1rem',
									height: '100%',
									':hover': {
										opacity: 0.9,
										paddingX: '4rem',							
									},
								}}
							>
								{link.name}
							</Typography>
						</Box>
					</Stack>
				))}
			</Stack>
		</Stack>
	)
}
