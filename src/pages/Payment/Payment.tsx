import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

import { CallbackContainer } from './style'


const PaymentCallback = () => {
	const [searchParams] = useSearchParams()
	const isSuccess = Boolean(
		JSON.parse(searchParams.get('isSuccess') ?? 'false')
	)
	console.log(isSuccess)
	const [timer, setTimer] = useState(10)
	useEffect(() => {
		if (timer <= 0) return
		setTimeout(() => {
			setTimer(timer - 1)
		}, 1000)
	}, [timer])

	return (
		<CallbackContainer>
			<Typography variant="h4" sx={{color: isSuccess ? 'success' : 'red'}}>
				{isSuccess
					? 'Pay the bill successfully'
					: 'There has been an error during the process'}
			</Typography>
			{timer <= 0 ? (
				<Navigate to="/home" replace={true} />
			) : (
				<Typography>
          This page will be redirected in {timer} seconds.
				</Typography>
			)}
		</CallbackContainer>
	)
}

export default PaymentCallback
