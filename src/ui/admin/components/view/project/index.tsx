import { Link } from '@mui/material';
import { Box } from '@mui/system';
import { AnalysisOptions } from 'eslint-scope';
import { FC, Fragment } from 'react';
import { Project } from '../../../../../types/common/api/user/project';
import { Flexbox } from '../../../../components/common/flex-box';
import { objectFieldChecker } from '../../../../utils/object-field-checker';
import { checkProps } from '../../../../utils/object-props-checker';

type Props = {
	data: Project;
};

export const UserProject: FC<Props> = ({ data }) => {
	const {
		name,
		attachedAttachments,
		averageHoursPerMonth,
		description,
		hourlyRate,
		pricingModel,
		projectLink,
	} = objectFieldChecker<Project>(data);
	const projectArr = [
		{
			title: 'name of project:',
			value: name,
		},
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
	];

	return (
		<>
			{projectArr.map((item, index) => (
				<Flexbox sx={{ gridGap: '16px' }} key={`${item.title}_${index}`}>
					<Box>{item.title}</Box>
					{checkProps(item)}
				</Flexbox>
			))}
		</>
	);
};
