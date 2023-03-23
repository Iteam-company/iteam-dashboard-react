import { Box, Link } from '@mui/material';
import { cloneElement, FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BoxEllipsis } from '../../../../styles/box-ellipsis';
import { Cv } from '../../../../types/common/api/user/cv';

type Props = {
	cv: Cv | null;
	component?: JSX.Element;
};

export const UserCv: FC<Props> = ({ cv, component }) => {
	const { originalName, fileUrl } = cv || {};
	return (
		<>
			{cv ? (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						texAlign: 'center',
					}}>
					<BoxEllipsis width='80px'>
						<Link noWrap component={RouterLink} to={cv.fileUrl} sx={{ mr: 1 }}>
							{cv.originalName}
						</Link>
					</BoxEllipsis>
					<Box>
						{component && cloneElement(component, { originalName, fileUrl })}
					</Box>
				</Box>
			) : (
				'N/A'
			)}
		</>
	);
};
