import { FC } from 'react';
// import { Helmet } from 'react-helmet-async';

type Props = {
	tabTitle?: string;
};
export const DefaultTabtitle: FC<Props> = ({ tabTitle }) => {
	console.log('tabTitle', tabTitle);

	return (
		// <Helmet>
		// 	<title>{tabTitle}</title>
		// </Helmet>
		<></>
	);
};
