import { Button } from '@mui/material'



const FixedBottomButton = (props: any) => {
	return (
		<Button sx={{paddingTop: '2rem', textShadow: '0px 1px 0px #000', position: 'fixed', zIndex: 99, bottom: 20}} {...props}>{props.children}</Button>
	)
}

export default FixedBottomButton
