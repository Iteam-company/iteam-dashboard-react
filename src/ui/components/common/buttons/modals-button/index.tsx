import { SvgIconComponent } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { SvgIconTypeMap } from '@mui/material';
import { FC, ReactElement } from 'react';

type Props = {
	text?: string;
	handleClick?: () => void;
	loading?: boolean;
	icon?: ReactElement<SvgIconTypeMap, SvgIconComponent>;
};
export const ModalButton: FC<Props> = ({
	text,
	handleClick,
	loading = false,
	icon,
}) => {
	return (
		<LoadingButton
			variant='contained'
			color='primary'
			startIcon={icon}
			type='submit'
			loading={loading}
			onClick={handleClick}>
			{text}
		</LoadingButton>
	);
};
