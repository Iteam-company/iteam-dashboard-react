import { Link } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { leadingInProject } from '../../../../types/common/api/user/leading-in-projects';

type Props = {
	leadingInProjects?: Array<leadingInProject>;
};
export const Projects: FC<Props> = ({ leadingInProjects }) => {
	return (
		<>
			{leadingInProjects
				? leadingInProjects?.map((project) => (
					<Link
						key={project.id}
						component={RouterLink}
						to={project.projectLink}>
						{project.name}
					</Link>
				  ))
				: 'N/A'}
		</>
	);
};
