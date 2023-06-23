/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Box,
	Button,
	Divider,
	Grid,
	Modal,
	TextField,
	Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'

import { useAppDispatch } from '../../../shared/utils/reduxHook'
import {
	coursesFetch,
	createCourse,
	updateCourse,
} from '../../../shared/slices/courseSlice'
import { Course, CreateCourseForm } from '../../../shared/common/types'


const checkoutSchema = yup.object().shape({
	title: yup.string().required('Please enter title!'),
	background: yup.string().required('Please enter background image url!'),
	price: yup
		.number()
		.required('Please enter price!')
		.positive('Must be a positive number.'),
	alias: yup.string().required('Please enter alias!'),
	description: yup.string().required('Please enter description!'),
	rating: yup
		.number()
		.required('Please enter rating!')
		.positive('Must be a positive number.')
		.min(0, 'Must be >= 0')
		.max(5, 'Must be <= 5'),
	degreeOfDifficulty: yup
		.number()
		.required('Please enter degreeOfDifficulty!')
		.positive('Must be a positive number.')
		.min(0, 'Must be >= 0')
		.max(5, 'Must be <= 10'),
})

type CreateCourseProps = {
	handleClose: VoidFunction,
	isOpen: boolean,
	updatedCourse?: Course | null,
};

const modalContentStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

const CreateCourseModal = ({
	isOpen,
	handleClose,
	updatedCourse,
}: CreateCourseProps) => {
	const dispatch = useAppDispatch()
	const form = useForm<CreateCourseForm>({
		resolver: yupResolver(checkoutSchema),
	})
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = form
	useEffect(() => {
		if (updatedCourse != null) {
			const defaultValues: Course = {
				_id: updatedCourse._id,
				title: updatedCourse.title,
				alias: updatedCourse.alias,
				background: updatedCourse.background,
				degreeOfDifficulty: updatedCourse.degreeOfDifficulty,
				description: updatedCourse.description,
				price: updatedCourse.price,
				rating: updatedCourse.rating,
			}

			reset({ ...defaultValues })
		}
	}, [updatedCourse])
	const onSubmit = async (submitForm: CreateCourseForm) => {
		if (updatedCourse != null) {
			const submitUpdatedCourse : Course = {
				...submitForm,
				_id: updatedCourse._id
			}
			await dispatch(updateCourse(submitUpdatedCourse))
		} else {
			await dispatch(createCourse(submitForm))
		}

		await dispatch(coursesFetch())
		handleClose()
	}
	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
		>
			<Box sx={modalContentStyle}>
				<Typography variant="h4">
					{updatedCourse ? 'Edit course' : 'Create new course'}
				</Typography>
				<Divider sx={{ marginY: 3, borderColor: 'primary.main' }} />
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={12}>
						<Typography variant="h6">Title</Typography>
						<TextField
							sx={{ width: '100%' }}
							{...register('title')}
							placeholder="course title"
							variant="outlined"
						/>
						{errors.title && (
							<Typography fontSize="xl" color="red">
								{errors.title.message}
							</Typography>
						)}
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6">Background Image</Typography>
						<TextField
							sx={{ width: '100%' }}
							{...register('background')}
							placeholder="course background image url"
							variant="outlined"
						/>
						{errors.background && (
							<Typography fontSize="xl" color="red">
								{errors.background.message}
							</Typography>
						)}
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6">Price</Typography>
						<TextField
							type={'number'}
							defaultValue={0}
							{...register('price')}
							placeholder="course price"
							variant="outlined"
						/>
						{errors.price && (
							<Typography fontSize="xl" color="red">
								{errors.price.message}
							</Typography>
						)}
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6">Alias</Typography>
						<TextField
							{...register('alias')}
							placeholder="course alias"
							variant="outlined"
						/>
						{errors.alias && (
							<Typography fontSize="xl" color="red">
								{errors.alias.message}
							</Typography>
						)}
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6">Description</Typography>
						<TextField
							{...register('description')}
							placeholder="course description"
							variant="outlined"
						/>
						{errors.description && (
							<Typography fontSize="xl" color="red">
								{errors.description.message}
							</Typography>
						)}
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6">Rating</Typography>
						<TextField
							type={'number'}
							defaultValue={0}
							{...register('rating')}
							placeholder="course price"
							variant="outlined"
						/>
						{errors.rating && (
							<Typography fontSize="xl" color="red">
								{errors.rating.message}
							</Typography>
						)}
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6">Degree Of Difficulty</Typography>
						<TextField
							type={'number'}
							defaultValue={0}
							{...register('degreeOfDifficulty')}
							placeholder="course price"
							variant="outlined"
						/>
						{errors.degreeOfDifficulty && (
							<Typography fontSize="xl" color="red">
								{errors.degreeOfDifficulty.message}
							</Typography>
						)}
					</Grid>
				</Grid>

				<Divider sx={{ marginY: 3, borderColor: 'primary.main' }} />
				<Button onClick={handleSubmit(onSubmit)} variant="contained">
					{updatedCourse ? 'Edit' : 'Create'}
				</Button>
			</Box>
		</Modal>
	)
}

export default CreateCourseModal
