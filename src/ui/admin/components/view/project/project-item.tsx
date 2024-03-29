import { Box } from '@mui/system';
import moment from 'moment';
import { createContext, FC, Fragment, useEffect, useState } from 'react';
import {
	useDeleteProjectMutation,
	usePatchProjectMutation,
} from '../../../../../api/project';
import { useGetUserQuery } from '../../../../../api/user';
import { AdminRoutes } from '../../../../../constants/admin/admin-routes';
import { Project } from '../../../../../types/common/api/user/project';
import { ProjectContext } from '../../../../../types/common/context/project';
import { Flexbox } from '../../../../components/common/flex-box';
import { EditModal } from '../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../utils/object-field-checker';
import { checkVariantOfTag } from '../../../../utils/object-tag-checker';
import { CardWrapper } from '../user/user-summary/user-card-wrapper';
import { ProjectItemPatch } from './project-item-patch';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const projectContext = createContext<ProjectContext | null>(null);
type Props = {
	project: Project;
};

export const ProjectItem: FC<Props> = ({ project }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		setOpen(false);
	};

	const {
		id,
		name,
		averageHoursPerMonth,
		description,
		hourlyRate,
		pricingModel,
		projectLink,
		client,
		status,
		teamSize,
		ourCompanyResponsibility,
		startDate,
		endDate,
		endReason,
		userId,
	} = objectFieldChecker<Project>(project);
	const [deleteProject] = useDeleteProjectMutation();
	const handleDeleteProject = (e: React.MouseEvent) => {
		e.stopPropagation();
		deleteProject(id.toString());
	};
	const { data } = useGetUserQuery(userId ? userId.toString() : null);
	const [query, setQuery] = useState({
		id,
		name,
		averageHoursPerMonth,
		description,
		hourlyRate,
		pricingModel,
		projectLink,
		client,
		status,
		teamSize,
		ourCompanyResponsibility,
		startDate,
		endDate,
		endReason,
	});

	const [patch, { isSuccess }] = usePatchProjectMutation();

	const onSubmit = () => patch(query);

	useEffect(() => {
		(e: React.MouseEvent) => handleClose(e);
	}, [isSuccess]);

	const handleProjectInfo = (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof Project,
	) => {
		setQuery((prev) => ({ ...prev, [name]: event.target.value }));
	};

	const handleProjectDateInfo = (date: Date | null, name: keyof Project) => {
		setQuery((prev) => ({
			...prev,
			[name]: moment(date).format('DD/MM/YYYY'),
		}));
	};
	const projectArr = [
		{
			title: 'description:',
			value: description,
		},

		{
			title: 'start date:',
			value: startDate,
		},
		{
			title: 'end date:',
			value: endDate,
		},
		{
			title: 'end reason:',
			value: endReason as string,
		},
		{
			title: 'responsibity:',
			value: ourCompanyResponsibility,
		},
		{
			title: 'client:',
			value: client as string,
		},
		{
			title: 'status:',
			value: status,
		},
		{
			title: 'team size:',
			value: teamSize,
		},
		{
			title: 'average hours per month:',
			value: averageHoursPerMonth,
		},
		{
			title: 'hourly rate',
			value: hourlyRate,
		},
		{
			title: 'pricing model:',
			value: pricingModel,
		},
		{
			title: 'project link:',
			value: projectLink,
			href: projectLink,
		},
		{
			title: 'user:',
			value:
				data?.name && data?.surname ? `${data.name} ${data.surname}` : 'N/A',
			href: `${AdminRoutes.USERS}/${data?.id}`,
		},
	];

	return (
		<projectContext.Provider
			value={{ query, handleProjectInfo, handleProjectDateInfo }}>
			<CardWrapper
				title={name}
				icon={<DeleteOutlineIcon />}
				handleAnotherFunc={handleDeleteProject}
				modal={
					<EditModal
						handleSubmit={onSubmit}
						element={
							<Box>
								<ProjectItemPatch />
							</Box>
						}
					/>
				}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}>
				<>
					{projectArr.map((item, index) => (
						<Flexbox sx={{ gridGap: '16px' }} key={`${item.title}_${index}`}>
							<Box>{item.title}</Box>
							{checkVariantOfTag(item)}
						</Flexbox>
					))}
				</>
			</CardWrapper>
		</projectContext.Provider>
	);
};
