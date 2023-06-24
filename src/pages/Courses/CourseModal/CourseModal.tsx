import { Button, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Course } from '../../../shared/common/types'

import { CourseModalBox, ModalBody, ModalHeader } from './styles'


type CourseModalProps = {
	course: Course | null,
	isOpenModal: boolean,
	handleClose: () => void,
};

const CourseModal = ({ isOpenModal, handleClose, course }: CourseModalProps) => {
	const navigate = useNavigate()
	
	return (
		<Modal open={isOpenModal} onClose={handleClose}>
			<CourseModalBox>
				<ModalHeader>
					<Typography variant="h4" textAlign={'center'}>{course ? course.title : ''}</Typography>
					<img src={course?.background} style={{width: '100%', height:'auto', maxWidth:'20rem', objectPosition:'center'}} alt="course" />					
				</ModalHeader>
				<ModalBody>
					<Typography sx={{ mt: 2 }}>
						{course ? course.description : 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'}
					</Typography>
					
					<Button variant={'contained'} onClick={()=> navigate(`/courses/${course ? course._id : 1}`)}>Start this course</Button>
				</ModalBody>
			</CourseModalBox>
		</Modal>
	)
}

export default CourseModal
