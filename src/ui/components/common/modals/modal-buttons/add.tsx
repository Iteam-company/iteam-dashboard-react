import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
	text?: string;
};
export const AddButton: FC<Props> = ({ text }) => {
	return (
		<Button variant='contained' color='primary' type='submit'>
			{text}
		</Button>
	);
};
