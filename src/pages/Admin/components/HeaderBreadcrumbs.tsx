/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import { isString } from 'lodash'
// material
import { Box, Typography, Link } from '@mui/material'

//
import MBreadcrumbs, { IMBreadcrumbsProps } from '../../../shared/components/material-extends/MBreadcrumbs'

// ----------------------------------------------------------------------

interface IHeaderBreadcrumbsProps extends IMBreadcrumbsProps {
	action?: ReactNode;
	heading: string;
	moreLink?: string | string[];
}

export default function HeaderBreadcrumbs({
	links,
	action,
	heading,
	moreLink = '' || [],
	sx,
	...other
}: IHeaderBreadcrumbsProps) {
	return (
		<Box sx={{ mb: 5, ...sx }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="h4" gutterBottom textAlign={{xs:'center', md:'start'}}>
						{heading}
					</Typography>
					<MBreadcrumbs links={links} {...other} />
				</Box>

				{action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
			</Box>

			<Box sx={{ mt: 2 }}>
				{isString(moreLink) ? (
					<Link href={moreLink} target="_blank" variant="body2">
						{moreLink}
					</Link>
				) : (
					moreLink.map((href) => (
						<Link
							noWrap
							key={href}
							href={href}
							variant="body2"
							target="_blank"
							sx={{ display: 'table' }}
						>
							{href}
						</Link>
					))
				)}
			</Box>
		</Box>
	)
}
