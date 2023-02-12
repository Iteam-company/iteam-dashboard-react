import { Box, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React from 'react';

type Props = {
	children?: JSX.Element;
	title?: string;
};

export const UserCardTop: React.FC<Props> = ({ children, title }) => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<Typography variant='h6' sx={{ mb: 2 }}>
					{title}
				</Typography>
				<Box>
					<AddOutlinedIcon sx={{ mr: 3, cursor: 'pointer' }} />
					<CreateOutlinedIcon sx={{ cursor: 'pointer' }} />
				</Box>
			</Box>
			{children}
		</>
	);
};
