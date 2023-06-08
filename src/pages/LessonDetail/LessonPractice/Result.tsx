import { Box, Typography } from '@mui/material'

import { ResultBox, ResultContent } from '../styles'


type ResultProps = {
	isCorrect: boolean,
	correctAnswer: string,
};

const Result = ({ isCorrect, correctAnswer }: ResultProps) => {
	return (
		<ResultBox sx={{ backgroundColor: isCorrect ? '#F5FFD8' : '#FFDDD8' }}>
			<ResultContent>
				<Box color={isCorrect ? 'secondary.main' : 'error.main'}>
					<Typography fontSize={'1.5rem'}>{isCorrect ? 'ยินดีด้วย!' : 'อ๊ะ.. ดูเหมือนจะไม่ถูก'}</Typography>
					<Typography>ตอบถูก! : {correctAnswer ? correctAnswer : 'จมูก'}</Typography>
				</Box>
				{/* <Button
					variant={'contained'}
					sx={{
						color: 'white',
						backgroundColor: isCorrect ? 'secondary.main' : 'error.main',
						':hover': {
							backgroundColor: isCorrect ? 'secondary.main' : 'error.main',
						},
					}}
				>
          SELANJUTNYA
				</Button> */}
			</ResultContent>
		</ResultBox>
	)
}

export default Result
