import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  handleDelete?: () => void;
};
export const DeleteButton: FC<Props> = ({handleDelete}) => {
	return (
		<Button
			variant='contained'
			startIcon={<DeleteIcon />}
			sx={{ mr: 2, height: '100%' }}
			onClick={handleDelete}>
			Delete
		</Button>
	);
};
