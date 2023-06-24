import SimpleBarReact, { Props } from 'simplebar-react'
// material
import { styled } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'
import { useRef } from 'react'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
	flexGrow: 1,
	height: '100%',
	overflow: 'hidden'
}))

const SimpleBarStyle = styled(SimpleBarReact)(() => ({
	maxHeight: '100%',
	'& .simplebar-scrollbar': {
		'&:before': {
			backgroundColor: 'primary.main'
		},
		'&.simplebar -visible:before': {
			opacity: 1
		}
	},
	'& .simplebar-track.simplebar-vertical': {
		width: 10
	},
	'& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
		height: 6
	},
	'& .simplebar-mask': {
		zIndex: 'inherit'
	},
	'& .simplebar-placeholder': {
		height:'5vh !important'
	}
}))

// ----------------------------------------------------------------------

export default function Scrollbar({ children, sx, ...other }: BoxProps & Props) {
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
	const ref = useRef(null)
	if (isMobile) {
		return (
			<Box sx={{ overflowX: 'auto', ...sx }} {...other}>
				{children}
			</Box>
		)
	}

	return (
		<RootStyle>
			<SimpleBarStyle ref={ref} clickOnTrack={false} sx={sx} {...other}>
				{children}
			</SimpleBarStyle>
		</RootStyle>
	)
}
