import React from 'react';
import { useSnackbar, VariantType } from 'notistack';
import { Button } from '@mui/material';

export const useNotifySnackbar = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const action = (snackbarId: string | number) => (
		<Button
		sx={{color: '#fff'}}
			onClick={() => {
				closeSnackbar(snackbarId);
			}}>
				close
			</Button>
	);
	const showSnackbar = (
		message: string,
		variant: VariantType,

	) => {
		enqueueSnackbar(message, { variant, action });
	};
	return { showSnackbar };
};
