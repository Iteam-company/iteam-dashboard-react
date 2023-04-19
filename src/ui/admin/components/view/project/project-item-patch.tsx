import { Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FC, Fragment } from 'react';
import { Project } from '../../../../../types/common/api/user/project';
import { Input } from '../../../../components/common/input';

type Props = {
	query: Partial<Project>;
	handleProjectInfo: (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof Project,
	) => void;
	handleProjectDateInfo: (date: Date | null, name: keyof Project) => void;
};

export const ProjectItemPatch: FC<Props> = ({
	query,
	handleProjectInfo,
	handleProjectDateInfo,
}) => {
	const {
		name,
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
	} = query;

	const ProjectPatchModel = [
		{
			title: 'Project name',
			value: name,
			argumentName: 'name',
		},
		{
			title: 'Description',
			value: description,
			argumentName: 'description',
		},
		{
			title: 'Hourly rate',
			value: hourlyRate,
			argumentName: 'hourlyRate',
		},
		{
			title: 'Pricing model',
			value: pricingModel,
			argumentName: 'pricingModel',
		},
		{
			title: 'Client',
			value: client,
			argumentName: 'client',
		},
		{
			title: 'Project link',
			value: projectLink,
			argumentName: 'projectLink',
		},
		{
			title: 'Status',
			value: status,
			argumentName: 'projectLink',
		},
		{
			title: 'Team size',
			value: teamSize,
			argumentName: 'teamSize',
		},
		{
			title: 'Responsibility',
			value: ourCompanyResponsibility,
			argumentName: 'ourCompanyResponsibility',
		},
		{
			title: 'Start day',
			value: startDate,
			date: true,
			argumentName: 'startDate',
		},
		{
			title: 'End day',
			value: endDate,
			date: true,
			argumentName: 'endDate',
		},
		{
			title: 'End reason',
			value: endReason,
			argumentName: 'endReason',
		},
	];

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={['DateRangePicker']}>
				{ProjectPatchModel.map((item, index) => {
					if (item.date) {
						return (
							<Fragment key={`${item.title}_${index}`}>
								<Typography>{item.title}</Typography>
								<DatePicker />
							</Fragment>
						);
					}

					return (
						<Fragment key={`${item.title}_${index}`}>
							<Typography>{item.title}</Typography>
							<Input
								name={item.title}
								value={item.value as string}
								handleChange={(e) =>
									handleProjectInfo(e, item.argumentName as keyof Project)
								}
							/>
						</Fragment>
					);
				})}
			</DemoContainer>
		</LocalizationProvider>
	);
};
