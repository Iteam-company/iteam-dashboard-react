import { EnviromentTypes } from './enviroment-types';

export const {
	REACT_APP_API_DEV_DOMAIN,
	REACT_APP_API_DEV_PORT,
	NODE_ENV,
	REACT_APP_API_DOMAIN,
} = process.env;

export const apiURL =
	NODE_ENV === EnviromentTypes.PRODUCTION
		? REACT_APP_API_DOMAIN
		: // : `${REACT_APP_API_DEV_DOMAIN}${REACT_APP_API_DEV_PORT}`;
		  `${REACT_APP_API_DEV_DOMAIN}`;

export const isProd = NODE_ENV === EnviromentTypes.PRODUCTION;
