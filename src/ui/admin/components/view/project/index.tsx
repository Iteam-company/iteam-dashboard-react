import { Box } from '@mui/system';
import { FC, Fragment, useState } from 'react';
import { useGetUserQuery } from '../../../../../api/user';
import { AdminRoutes } from '../../../../../constants/admin/admin-routes';
import { Project } from '../../../../../types/common/api/user/project';
import { Flexbox } from '../../../../components/common/flex-box';
import { EditModal } from '../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../utils/object-field-checker';
import { checkVariantOfTag } from '../../../../utils/object-tag-checker';
import { CardWrapper } from '../user/user-summary/user-card-wrapper';

type Props = {
	project: Project;
};

export const UserProject: FC<Props> = ({ project }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const {
		name,
		attachedAttachments,
		averageHoursPerMonth,
		description,
		hourlyRate,
		pricingModel,
		projectLink,
		userId,
	} = objectFieldChecker<Project>(project);
	const { data } = useGetUserQuery(userId.toString());

	const projectArr = [
		{
			title: 'description:',
			value: description,
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
		<CardWrapper
			title={name}
			modal={<EditModal />}
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
	);
};
