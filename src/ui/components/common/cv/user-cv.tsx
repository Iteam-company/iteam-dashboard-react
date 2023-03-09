import { Link } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Cv } from '../../../../types/common/api/user/cv';

type Props = {
	cv?: Cv | null;
};

export const UserCv: FC<Props> = ({ cv=null }) => {
	return (
		<>
			{cv ? (
				<Link component={RouterLink} to={cv.fileUrl}>
					{cv.originalName}
				</Link>
			) : (
				'N/A'
			)}
		</>
	);
};
