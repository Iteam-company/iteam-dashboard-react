import { Box, Card, Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetProjectByIdQuery } from '../../../../api/project';
import { ProjectItem } from '../../components/view/project/project-item';

export const ProjectWrapper = () => {
	const { id } = useParams();
	const { data } = useGetProjectByIdQuery(id!);
	return (
		<Box sx={{ m: 2 }}>
			<Card sx={{ p: 2 }}>
				{data ? <ProjectItem project={data!} /> : <Skeleton />}
			</Card>
		</Box>
	);
};
