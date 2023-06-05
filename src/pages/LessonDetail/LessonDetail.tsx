/* eslint-disable max-lines-per-function */

import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

import QuestionImage1 from '../../assets/images/QuestionImage1.png'
import { initializeAxios } from '../../shared/rest/axiosUtils'

import {
	AnswerChoice,
	GridContainer,
	GridItem,
	LessonDetailContainer,
	QuestionBox,
	QuestionImage,
	ResultBox,
	ResultContent,
} from './styles'


type ResultProps = {
	isCorrect: boolean,
};

const AnswerChoices = ['คุณ', 'โซก้า', 'ทอด', 'จมูก']

const CorrectChoice = 'จมูก'

const Result = ({ isCorrect }: ResultProps) => {
	return (
		<ResultBox sx={{ backgroundColor: isCorrect ? '#F5FFD8' : '#FFDDD8' }}>
			<ResultContent>
				<Box color={isCorrect ? 'secondary.main' : 'error.main'}>
					<Typography>คุณถูก!</Typography>
					<Typography>คำตอบ : จมูก</Typography>
				</Box>
				<Button
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
				</Button>
			</ResultContent>
		</ResultBox>
	)
}

const LessonDetail = () => {
	// const { lessonId } = useParams()
	// const axiosInstance = initializeAxios({options: {
	// 	baseURL: process.env.API_DEV_BASE_URL,
	// }})
	// const res = axiosInstance.get('/tinithai/courses')
	// console.log('res', res)
	
	const [userChoice, setUserChoice] = useState('')
	return (
		<LessonDetailContainer>
			<QuestionBox>
				<Typography fontSize="40px">ภาพนี้หมายถึงอะไร?</Typography>
				<QuestionImage src={QuestionImage1} />
				<GridContainer container rowSpacing={1} columnSpacing={10}>
					{AnswerChoices.map((ans) => (
						<GridItem
							item
							xs={6}
							key={ans}					
						>
							<AnswerChoice onClick={() => setUserChoice(ans)} sx={{
								':hover': {
									boxShadow: ' 0px 0px 5px 0px #000',
									backgroundColor: 'secondary.main'
								},
								':active': {
									transform: 'scale(1.05)',
								},
							}}>
								{ans}
							</AnswerChoice>
						</GridItem>
					))}
				</GridContainer>
				{userChoice != '' ? <Result isCorrect={userChoice === CorrectChoice} /> : <ResultBox /> }
			</QuestionBox>
		</LessonDetailContainer>
	)
}

export default LessonDetail
