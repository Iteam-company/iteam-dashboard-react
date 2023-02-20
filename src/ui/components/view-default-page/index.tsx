import { Box } from '@mui/material';
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
			<Box>{children}</Box>
		</>
	);
});

ViewDefaultPage.displayName = 'ViewDefaultPage';
