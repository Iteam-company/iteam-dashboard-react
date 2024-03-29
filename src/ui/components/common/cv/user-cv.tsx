import { Link } from '@mui/material';
import { FC } from 'react';
import { BoxEllipsis } from '../box-ellipsis';
import { Cv } from '../../../../types/common/api/user/cv';
import { ButtonFileDownload } from '../buttons/file-download';

type Props = {
	cv?: Cv | string;
};

export const UserCv: FC<Props> = ({ cv = 'N/A' }) => {
	return (
		<>
			{typeof cv === 'string' ? (
				cv 
			) : (
				<ButtonFileDownload originalName={cv.originalName} fileUrl={cv.fileUrl}>
					<BoxEllipsis width='80px'>
						<Link noWrap>{cv.originalName}</Link>
					</BoxEllipsis>
				</ButtonFileDownload>
			)}
		</>
	);
};
