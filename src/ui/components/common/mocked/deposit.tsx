import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { MouseEvent } from 'react';
import Title from './title';

function preventDefault(event: MouseEvent) {
	event.preventDefault();
}

export default function Deposits() {
	return (
		<>
			<Title>Recent Deposits</Title>
			<Typography component='p' variant='h4'>
				$3,024.00
			</Typography>
			<Typography color='text.secondary' sx={{ flex: 1 }}>
				on 15 March, 2019
			</Typography>
			<div>
				<Link color='primary' href='#' onClick={preventDefault}>
					View balance
				</Link>
			</div>
		</>
	);
}