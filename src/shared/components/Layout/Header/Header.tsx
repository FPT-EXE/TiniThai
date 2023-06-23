/* eslint-disable max-lines-per-function */
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Tooltip } from '@mui/material'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { up } from 'styled-breakpoints'
import { useNavigate } from 'react-router-dom'

import logo from '../../../../../public/images/logo.svg'


export default function MenuAppBar() {
	const navigate = useNavigate()
	const [isAuth] = React.useState(true)
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const isLargeScreen = useBreakpoint(up('md'))

	return (
		<Box sx={{ width: '100%' }}>
			<AppBar position="static" color='primary' sx={
				isLargeScreen ? {
					paddingLeft: '10%', paddingRight: '10%'
				} : {}
			}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:'pointer' }} onClick={()=> navigate('/home')}>
						<a href='/home'>
							<img src={logo} alt='logo' width='70px' />
						</a>
            TinyThai
					</Typography>

					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="cart-appbar"
						aria-haspopup="true"
						color="inherit"
						href='/cart'
					>
						<ShoppingCartIcon />
					</IconButton>
					{isAuth && (
						<div>
							<Tooltip title="Open settings">
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit"
									sx={{ p: 0 }}
								>
									<AccountCircle />
								</IconButton>
							</Tooltip>
							
							<Menu
								id="menu-appbar"
								sx={{ mt: '40px' }}
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={() => {
									setAnchorEl(null)
									navigate('/courses')
								}}>My courses</MenuItem>
								<MenuItem onClick={() => {
									setAnchorEl(null)
									navigate('/admin/courses')
								}}>Admin Management</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}
