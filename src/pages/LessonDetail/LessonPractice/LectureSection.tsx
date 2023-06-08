/* eslint-disable max-lines-per-function */
import { Step, Stepper, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { Lesson } from '../../../shared/common/types'
import {
	FlexBetween,
	LectureCard,
	LectureContainer,
	QuestionTitle,
	StepBox,
	StepperSection,
} from '../styles'

import styles from './lecture.module.css'


type LectureSectionProps = {
	currentLesson: Lesson,
};

const LectureSection = ({ currentLesson }: LectureSectionProps) => {
	const [isAnimated, setAnimated] = useState(false)
	const [activeStep, setActiveStep] = useState(0)
	const [quizPart, setQuizPart] = useState(0)

	const handleNext = () => {
		if (currentLesson) {
			const lectures = currentLesson.lectures
			if (activeStep < lectures.length - 1){
				setAnimated(true)
				setActiveStep((prevActiveStep) => prevActiveStep + 1)
			}
				
		}
	}

	const handleBack = () => {
		if (currentLesson) {
			if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1)
		}
	}

	useEffect(() => {
		if (currentLesson) {
			const lectures = currentLesson.lectures
			if (lectures.length <= 10) {
				setQuizPart(lectures.length)
			}
			if (lectures.length > 10) {
				if (lectures.length % 2 === 0) setQuizPart(lectures.length / 2)
				else setQuizPart(Math.floor(lectures.length / 2))
			}
		}
	}, [currentLesson])
	return (
		<LectureContainer>
			<StepperSection>			
				<Typography>
					{`${activeStep + 1}/${currentLesson.lectures.length}`}
				</Typography>
				<Stepper nonLinear activeStep={activeStep}>
					{currentLesson.lectures.slice(0, quizPart).map((lecture, index) => {
						return (
							<Step key={lecture.lectureNum}>
								<StepBox
									sx={{
										backgroundColor:
                      (activeStep % quizPart) + 1 === index + 1 ? 'primary.main' : '#E5E5E5',
									}}
								/>
							</Step>
						)
					})}
				</Stepper>
			</StepperSection>
			<QuestionTitle>
				<FlexBetween>
					<Button startIcon={<ArrowBackIosIcon />} onClick={handleBack}>
              Back
					</Button>

					<Button endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
              Next
					</Button>
				</FlexBetween>
			</QuestionTitle>
			{currentLesson.lectures.map((lecture, index) => (
				<LectureCard
					key={lecture.consonant}
					sx={{'--i': (index+1).toString()}}
					className={`${lecture.lectureNum === activeStep + 1 ? styles.displayCard : styles.hideCard} ${lecture.lectureNum !== activeStep + 1 && isAnimated ? styles.hideCardAnimate : '' }`}
				>
					<Typography height={'16%'} fontSize="3rem" sx={{alignSelf: 'flex-start', borderBottom: 'solid 3px #000', color: 'secondary.main', textShadow:'1px 1px 2px #000000'}}>{lecture.consonant}</Typography>
					<Typography height={'28%'} fontSize="5rem">{lecture.symbol}</Typography>
					<Typography height={'28%'} fontSize="1rem">{`/'${lecture.spelling}'/`}</Typography>
					<Typography height={'28%'} fontSize="2.5rem" sx={{justifySelf: 'flex-end'}}>{lecture.meaning}</Typography>
				</LectureCard>
			))}
			
			
		</LectureContainer>
	)
}

export default LectureSection
