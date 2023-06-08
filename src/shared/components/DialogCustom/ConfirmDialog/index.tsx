import {
	Button,
	DialogActions,
	DialogContentText,
	DialogProps,
} from '@mui/material'
import { FC, Fragment } from 'react'

import DialogCustom from '../../DialogCustom'


interface IConfirmDialogProps {
	title: string;
	openDialog: boolean;
	handleOpenDialog?: () => void;
	handleCloseDialog: () => void;
	maxWidth?: DialogProps['maxWidth'];
	handleConfirm: () => void;
	children?: any;
}

const ConfirmDialog: FC<IConfirmDialogProps> = ({
	title,
	openDialog,
	handleCloseDialog,
	children,
	maxWidth = 'md',
	handleConfirm,
}) => {
	return (
		<DialogCustom
			title={title}
			openDialog={openDialog}
			handleCloseDialog={handleCloseDialog}
			maxWidth={maxWidth}
		>
			<Fragment>
				<DialogContentText>{children}</DialogContentText>
				<DialogActions>
					<Button
						variant="contained"
						onClick={handleCloseDialog}
						color="primary"
						size="small"
					>
                        Cancel
					</Button>
					<Button
						variant="contained"
						color="secondary"
						size="small"
						onClick={handleConfirm}
					>
                        Confirm
					</Button>
				</DialogActions>
			</Fragment>
		</DialogCustom>
	)
}

export default ConfirmDialog
