import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';

export const useHelmet = () => {
	const location = useLocation();
	const { pathname } = location;

	const appBarTitle = useMemo(
		() =>
			pathname
				.split('/')
				.reduce((accumulator, next) => {
					return (
						accumulator + ' ' + next.slice(0, 1).toUpperCase() + next.slice(1)
					);
				}, '')
				.trim() || 'Dashboard',
		[pathname],
	);

	return {
		helmet: <Helmet title={appBarTitle} />,
		appBarTitle,
	};
};
