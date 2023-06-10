import { Button, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Lesson } from '../../../shared/common/types'

import { LessonModalBox, ModalBody, ModalHeader } from './styles'


type LessonModalProps = {
	lesson: Lesson| null,
	isOpenModal: boolean,
	handleClose: () => void,
};

const LessonModal = ({ isOpenModal, handleClose, lesson }: LessonModalProps) => {
	const navigate = useNavigate()
	
	return (
		<Modal open={isOpenModal} onClose={handleClose}>
			<LessonModalBox>
				<ModalHeader>
					<Typography variant="h4">Lesson: {lesson ? lesson.name : ''}</Typography>
					<Typography color="#50555C">Level: {lesson ? lesson.level.toString() : ''}</Typography>
				</ModalHeader>
				<ModalBody>
					{/* <Typography sx={{ mt: 2 }}>
					{lesson ? lesson.name : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}
					</Typography> */}
					<Typography color="primary" sx={{ mt: 2 }}>Includes {(lesson && lesson.type === 'quiz') ? `${lesson.quizzes.length} quizzes` : `${lesson?.lectures.length} lectures`}  </Typography>
					<Button variant={'contained'} onClick={()=> navigate(`/lessons/${lesson ? lesson.id : 1}`)}>Start now?</Button>
				</ModalBody>
			</LessonModalBox>
		</Modal>
	)
}

export default LessonModal
