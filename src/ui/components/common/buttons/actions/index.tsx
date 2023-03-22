import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledMenu } from '../../mocked/styled-menu';
import { Box } from '@mui/system';
import { UsersActionTitle } from '../../actions-title';
import { UserActionsModals } from '../../modals/actions-modals';
import { AddUserModal } from '../../modals/add-user';
import { AddEmailInWhiteListModal } from '../../modals/add-email-in-white-list';

export const ButtonWithSelectActions = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [openModalAddUser, setOpenModalAddUser] = useState(false);
	const [openModalAddEmail, setOpenModalAddEmail] = useState(false);
	const open = Boolean(anchorEl);

	const handleCloseModalAddUser = () => {
		setOpenModalAddUser(false);
	};
	const handleOpenModalAddUser = () => {
		setOpenModalAddUser(true);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOpenModalAddEmail = () => {
		setOpenModalAddEmail(true);
	};

	const handleCloseModalAddEmail = () => {
		setOpenModalAddEmail(false);
	};

	const usersActions = [
		{
			title: 'Add Email To White List',
			onClick: () => handleOpenModalAddEmail(),
			element: (
				<AddEmailInWhiteListModal
					open={openModalAddEmail}
					handleOpen={handleOpenModalAddEmail}
					handleClose={handleCloseModalAddEmail}
				/>
			),
		},
		{
			title: 'Add User',
			onClick: () => handleOpenModalAddUser(),
			element: (
				<AddUserModal
					open={openModalAddUser}
					handleOpen={handleOpenModalAddUser}
					handleClose={handleCloseModalAddUser}
				/>
			),
		},
	];

	return (
		<>
			<Button
				id='action-button'
				aria-controls={open ? 'action-button' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				variant='contained'
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}>
				actions
			</Button>
			<StyledMenu
				id='action-button'
				MenuListProps={{
					'aria-labelledby': 'action-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}>
				<Box onClick={handleClose}>
					<UsersActionTitle usersActions={usersActions} />
				</Box>
			</StyledMenu>
			<UserActionsModals usersActions={usersActions} />
		</>
	);
};
