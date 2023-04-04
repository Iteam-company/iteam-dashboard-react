import { Link } from '@mui/material';
import { FC } from 'react';
import { BoxEllipsis } from '../box-ellipsis';
import { Cv } from '../../../../types/common/api/user/cv';
import { ButtonFileDownload } from '../buttons/file-download';

type Props = {
	cv?: Cv | null;
};

export const UserCv: FC<Props> = ({ cv = null }) => {
	const { originalName, fileUrl } = cv || {};
	return (
		<>
			{cv ? (
				<ButtonFileDownload originalName={originalName} fileUrl={fileUrl}>
					<BoxEllipsis width='80px'>
						<Link noWrap>{originalName}</Link>
					</BoxEllipsis>
				</ButtonFileDownload>
			) : (
				'N/A'
			)}
		</>
	);
};
