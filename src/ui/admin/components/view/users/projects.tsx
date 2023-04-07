import { Tooltip } from '@mui/material';
import { FC } from 'react';
import { MyLink } from '../../../../components/common/my-link';
import { User } from '../../../../../types/common/api/user';

type Props = {
	user: User;
};
export const Projects: FC<Props> = ({ user }) => {
	const { leadingInProjects, name } = user;
	const username = name ? name?.slice(0, 1).toUpperCase() + name?.slice(1) : '';
	return (
		<>
			{leadingInProjects?.length ? (
				<Tooltip
					title={`click for more information about ${username} projects`}>
					<MyLink>Projects</MyLink>
				</Tooltip>
			) : (
				'N/A'
			)}
		</>
	);
};
