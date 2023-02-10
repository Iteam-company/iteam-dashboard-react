import React, { useCallback } from 'react';
import { useSnackbar, VariantType } from 'notistack';

export const useNotifySnackbar = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const action = (snackbarId: string | number) => (
		<button
			onClick={() => {
				closeSnackbar(snackbarId);
			}}>
			close
		</button>
	);

	const showSnackbar = useCallback(
		(message: string, variant: VariantType) => {
			enqueueSnackbar(message, { variant, action });
		},
		[enqueueSnackbar, action],
	);

	return { showSnackbar };
};
