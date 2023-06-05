import { Button, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { LessonModalBox, ModalBody, ModalHeader } from './styles'


type LessonModalProps = {
	isOpenModal: boolean,
	handleClose: () => void,
};

const LessonModal = ({ isOpenModal, handleClose }: LessonModalProps) => {
	const navigate = useNavigate()
	return (
		<Modal open={isOpenModal} onClose={handleClose}>
			<LessonModalBox>
				<ModalHeader>
					<Typography variant="h4">Lesson:</Typography>
					<Typography color="#50555C">Level:</Typography>
				</ModalHeader>
				<ModalBody>
					<Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
					<Typography sx={{ mt: 2 }}>Includes 50 quizzes</Typography>
					<Button variant={'contained'} onClick={()=> navigate(`/lessons/${1}`)}>Start now?</Button>
				</ModalBody>
			</LessonModalBox>
		</Modal>
	)
}

export default LessonModal
