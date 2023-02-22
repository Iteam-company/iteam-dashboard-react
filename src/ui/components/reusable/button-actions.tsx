import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledMenu } from './customize-menu';
import { Actions } from '../../../types/common/actions-button/actions';

type Props = {
	actions?: Actions;
};

export const ButtonActions: FC<Props> = ({ actions }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
				{actions?.title || 'actions'}
			</Button>
			<StyledMenu
				id='action-button'
				MenuListProps={{
					'aria-labelledby': 'action-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}>
				{actions?.items?.map((item, i) => (
					<MenuItem key={`${item} - ${i}`} onClick={item.onclick} disableRipple>
						{actions.title}
					</MenuItem>
				))}
			</StyledMenu>
		</>
	);
};
