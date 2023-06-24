/* eslint-disable max-lines-per-function */
import { Button, Step, Stepper, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useEffect, useState } from 'react'

import {
	AnswerChoice,
	FlexBetween,
	GridContainer,
	GridItem,
	QuestionBox,
	QuestionImage,
	QuestionText,
	QuestionTitle,
	ResultBox,
	StepBox,
	StepperSection,
} from '../styles'
import { Lesson, LessonAnswer } from '../../../shared/common/types'
import { QuestionTypeEnum } from '../../../shared/common/constants'
import { useAppDispatch, useAppSelector } from '../../../shared/utils/reduxHook'
import QuestionImage1 from '../../../../public/images/QuestionImage1.png'
import { setLessonAnswers } from '../../../shared/stores/slices/lessonSlice'

import Result from './Result'



type QuizSectionProps = {
	currentLesson: Lesson,
};

const QuizSection = ({currentLesson }: QuizSectionProps) => {
	const dispatch = useAppDispatch()
	const reduxStates = useAppSelector((state) => state)
	const [currentChoice, setCurrentChoice] = useState('')
	const [activeStep, setActiveStep] = useState(0)
	const [quizPart, setQuizPart] = useState(0)
	const lessonAnswers = reduxStates.lesson.lessonAnswers
	const handleNext = () => {
		if (currentLesson) {
			setCurrentChoice('')
			const quizzes = currentLesson.quizzes
			if (activeStep < quizzes.length - 1)
				setActiveStep((prevActiveStep) => prevActiveStep + 1)
		}
	}

	const handleBack = () => {
		if (currentLesson) {
			setCurrentChoice('')
			if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1)
		}
	}

	const handleChooseAnswer = (answer: string, quizNum: number) => {
		if (currentLesson) {
			const newLessonAnswers = [...lessonAnswers] ?? []
			const newAnswer: LessonAnswer = {
				lessonId: currentLesson?.id,
				quizNum: quizNum,
				userChoice: answer,
			}
			const updateIndex = lessonAnswers.findIndex(
				(quiz) => quiz.lessonId === currentLesson.id && quiz.quizNum === quizNum
			)
			if (updateIndex > -1) {
				newLessonAnswers[updateIndex] = {
					...newLessonAnswers[updateIndex],
					userChoice: answer,
				}
			} else {
				newLessonAnswers.push(newAnswer)
			}
			dispatch(setLessonAnswers(newLessonAnswers))
			setCurrentChoice(answer)
		}
	}
	useEffect(() => {
		if (lessonAnswers.length > 0 && currentLesson) {
			const index = lessonAnswers.findIndex(
				(quiz) =>
					quiz.lessonId === currentLesson.id && quiz.quizNum === activeStep + 1
			)
			if (index > -1) setCurrentChoice(lessonAnswers[index].userChoice)
		}
	}, [lessonAnswers, activeStep, currentLesson])
	useEffect(() => {
		if (currentLesson) {
			const quizzes = currentLesson.quizzes
			if (quizzes.length <= 10) {
				setQuizPart(quizzes.length)
			}
			if (quizzes.length > 10) {
				if (quizzes.length % 2 === 0) setQuizPart(quizzes.length / 2)
				else setQuizPart(Math.floor(quizzes.length / 2))
			}
		}
	}, [currentLesson])
	return (
		<>
			<StepperSection>
				<Typography>{`${activeStep + 1}/${
					currentLesson.quizzes.length
				}`}
				</Typography>
				<Stepper nonLinear activeStep={activeStep}>
					{currentLesson.quizzes.slice(0, quizPart).map((quiz, index) => {
						return (
							<Step key={quiz.quizNum}>
								<StepBox
									sx={{
										backgroundColor:
                      (activeStep % quizPart) + 1 === index + 1	? 'primary.main': '#E5E5E5',
									}}
								/>
							</Step>
						)
					})}
				</Stepper>
			</StepperSection>
			{currentLesson.quizzes.map((quiz) => (
				<QuestionBox
					key={quiz.quizNum}
					display={quiz.quizNum === activeStep + 1 ? 'flex' : 'none'}
				>
					<QuestionTitle>
						<FlexBetween>
							<Button startIcon={<ArrowBackIosIcon />} onClick={handleBack}>
                Back
							</Button>

							<Button endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
                Next
							</Button>
						</FlexBetween>
						<Typography
							fontSize={{ xs: '1.5rem', md: '2rem' }}
							textAlign={'center'}
						>
							{quiz.questionTitle}
						</Typography>
					</QuestionTitle>
					{quiz.questionType === QuestionTypeEnum.IMAGETOWORD ? (
						<QuestionImage
							src={
								quiz.questionImage !== '' ? quiz.questionImage : QuestionImage1
							}
						/>
					) : (
						<QuestionText fontSize={'2.5rem'}>
							{quiz.questionProblem}
						</QuestionText>
					)}

					<GridContainer container rowSpacing={1} columnSpacing={10}>
						{quiz.answers.map((ans) => (
							<GridItem item xs={6} key={ans}>
								<AnswerChoice
									onClick={() => handleChooseAnswer(ans, quiz.quizNum)}
									sx={{
										backgroundColor:
                      currentChoice === ans ? 'secondary.main' : 'primary.main',
										':hover': {
											boxShadow: ' 0px 0px 5px 0px #000',
											backgroundColor: 'secondary.main',
										},
										':active': {
											transform: 'scale(1.05)',
										},
									}}
								>
									{ans}
								</AnswerChoice>
							</GridItem>
						))}
					</GridContainer>
					{currentChoice != '' ? (
						<Result
							isCorrect={currentChoice === quiz.correctAnswer}
							correctAnswer={quiz.correctAnswer}
						/>
					) : (
						<ResultBox />
					)}
				</QuestionBox>
			))}
		</>
	)
}

export default QuizSection
