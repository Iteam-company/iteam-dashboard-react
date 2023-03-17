import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

type Props = {
  handleClose?: () => void;
};

export const CloseButton: FC<Props> = ({handleClose}) => {
	return (
		<Button
			size='medium'
			variant='contained'
			startIcon={<CloseIcon />}
			onClick={handleClose}
			sx={{ height: '100%' }}>
			Close
		</Button>
	);
};
