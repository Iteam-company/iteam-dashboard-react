import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
	handleDelete?: () => void;
	text?: string;
};
export const DeleteButton: FC<Props> = ({ handleDelete, text = 'delete' }) => {
	return (
		<Button
			variant='contained'
			startIcon={<DeleteIcon />}
			sx={{ mr: 2, height: '100%' }}
			onClick={handleDelete}>
			{text}
		</Button>
	);
};
