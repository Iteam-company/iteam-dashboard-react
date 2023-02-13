import React, { useCallback } from 'react';
import { useSnackbar, VariantType } from 'notistack';
import { Box } from '@mui/material';

export const useNotifySnackbar = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const action = (snackbarId: string | number) => (
		<Box
			sx={{
				width: '30px',
				height: '30px',
				cursor: 'pointer',
				position: 'absolute',
				left: '5%'
			}}
			onClick={() => {
				closeSnackbar(snackbarId);
			}}>
		</Box>
	);

	const showSnackbar = useCallback(
		(message: string, variant: VariantType, withAction = false) => {
			enqueueSnackbar(message, { variant, action: withAction ? action : null });
		},
		[enqueueSnackbar, action],
	);

	return { showSnackbar };
};
