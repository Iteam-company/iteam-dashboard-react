import { Box, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React, { cloneElement, Fragment, memo } from 'react';
import { Flexbox } from '../../../../../components/common/flex-box';

type Props = {
	children?: JSX.Element;
	title?: string;
	param?: boolean;
	modal?: JSX.Element;
	handleOpen?: (e: React.MouseEvent) => void;
	handleClose?: (e: React.MouseEvent) => void;
	open?: boolean;
	isLoading?: boolean;
	icon?: JSX.Element;
	handleAnotherFunc?: (e: React.MouseEvent) => void;
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
		icon = <AddOutlinedIcon />,
		handleAnotherFunc,
	}) => {
		const openModal = (e: React.MouseEvent) => {
			if (handleOpen) {
				e.stopPropagation();
				handleOpen(e);
			}

			return;
		};
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
						<Flexbox gridGap='16px' justifyContent='center'>
							<Box onClick={handleAnotherFunc}>{icon}</Box>

							<CreateOutlinedIcon
								onClick={(e) => openModal(e)}
								sx={{ cursor: 'pointer' }}
							/>
						</Flexbox>
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
