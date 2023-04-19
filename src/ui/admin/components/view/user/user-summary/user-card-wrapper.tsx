import { Box, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { cloneElement, memo } from 'react';

type Props = {
	children?: JSX.Element;
	title?: string;
	param?: boolean;
	modal?: JSX.Element;
	handleOpen?: () => void;
	handleClose?: () => void;
	open?: boolean;
	isLoading?: boolean;
};

export const CardWrapper: React.FC<Props> = memo(
	({
		children,
		title,
		param = true,
		modal,
		handleOpen,
		handleClose,
		open,
		isLoading,
	}) => {
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
					{param && (
						<Box>
							<AddOutlinedIcon sx={{ mr: 3, cursor: 'pointer' }} />
							<CreateOutlinedIcon
								sx={{ cursor: 'pointer' }}
								onClick={handleOpen}
							/>
						</Box>
					)}
				</Box>
				{children}
				{modal &&
					cloneElement(modal, { open, handleOpen, handleClose, isLoading })}
			</>
		);
	},
);

CardWrapper.displayName = 'UserCardWrapper';
