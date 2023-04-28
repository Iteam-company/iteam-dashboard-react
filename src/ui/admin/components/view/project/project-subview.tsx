import { Box, Card, Pagination } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../../../../types/common/api/user/project';
import { Flexbox } from '../../../../components/common/flex-box';
import { ProjectItem } from './project-item';

type Props = {
	data: Project[];
};

export const ProjectSubview: FC<Props> = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	const projectPerPage = 4;
	const indexOfLastProject = currentPage * projectPerPage;
	const count = +Math.ceil((data.length ?? 0) / projectPerPage);

	const indexOfFirstProject = indexOfLastProject - projectPerPage;
	const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

	const handleChange = (event: ChangeEvent<unknown>, page: number) => {
		setCurrentPage(page);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				gap: '20px',
			}}>
			{currentProjects.map((item) => (
				<Box sx={{ mt: '16px' }} key={item.id}>
					<Card
						sx={{ p: 2, cursor: 'pointer' }}
						onClick={() => navigate(`${item.id}`)}>
						<ProjectItem project={item} />
					</Card>
				</Box>
			))}
			<Flexbox justifyContent='center' alignItems='center'>
				<Pagination
					shape='rounded'
					variant='outlined'
					count={count}
					boundaryCount={0}
					onChange={handleChange}
				/>
			</Flexbox>
		</Box>
	);
};
