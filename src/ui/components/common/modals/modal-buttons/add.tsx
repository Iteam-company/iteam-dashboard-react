import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
	text?: string;
	handleClick?: () => void;
};
export const AddButton: FC<Props> = ({ text, handleClick }) => {
	return (
		<Button
			variant='contained'
			color='primary'
			type='submit'
			onClick={handleClick}>
			{text}
		</Button>
	);
};
