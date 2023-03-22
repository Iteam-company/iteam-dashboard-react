import { Box, Link } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { User } from '../../../../types/common/api/user';
import { Cv } from '../../../../types/common/api/user/cv';

type Props = {
	cv?: Cv | null;
	user?: User | null;
	file?: File | null;
};

export const UserCv: FC<Props> = ({ cv = null, user, file }) => {
	return (
		<>
			{cv ? (
				<Link component={RouterLink} to={cv.fileUrl}>
					<Box>{cv.originalName}</Box>
				</Link>
			) : (
				'N/A'
			)}
		</>
	);
};
