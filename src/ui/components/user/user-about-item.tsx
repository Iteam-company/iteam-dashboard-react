import { Button } from '@mui/material';

export const UserAboutItem = () => {
	return (
		<Button variant='contained' component='label'>
			Upload CV
			<input hidden accept='img/*' multiple type='file' />
		</Button>
	);
};
