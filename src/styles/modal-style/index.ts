import { SxProps, Theme } from '@mui/system';

export const style: SxProps<Theme> = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 14,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	outline: 'none',
	overflowY: 'auto',
	maxHeight: '80vh',
};
