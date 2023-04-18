import { Box, Card } from '@mui/material';
import { useAllProjectsQuery } from '../../../../api/project';
import { Loader } from '../../../components/common/loader';
import { UserProject } from '../../components/view/project';

export const Projects = () => {
	const { data = null, isLoading } = useAllProjectsQuery();
	return (
		<>
			{data ? (
				data.map((item) => (
					<Box sx={{ p: 2 }} key={item.id}>
						<Card sx={{ p: 2 }}>
							<UserProject project={item} />
						</Card>
					</Box>
				))
			) : (
				<Loader isLoading={isLoading} />
			)}
		</>
	);
};
