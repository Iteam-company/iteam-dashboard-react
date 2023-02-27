import { Box, Paper, Typography } from '@mui/material';
import { memo, PropsWithChildren, FC } from 'react';
import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends PropsWithChildren {
	tabTitle: string;
}

export const ViewDefaultPage: FC<Props> = memo(({ children, tabTitle }) => {
	return (
		<>
			<Helmet>
				<title>{tabTitle}</title>
			</Helmet>
			<Box>
				<Paper>
					<Typography color='text'>{tabTitle}123</Typography>
				</Paper>
				{children}
			</Box>
		</>
	);
});

ViewDefaultPage.displayName = 'ViewDefaultPage';
