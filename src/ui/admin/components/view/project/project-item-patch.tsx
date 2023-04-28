import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Fragment, useContext } from 'react';
import { PatchModele } from '../../layout/patch-modele';
import { projectContext } from './project-item';

export const ProjectItemPatch = () => {
	const context = useContext(projectContext);
	const { query, handleProjectInfo, handleProjectDateInfo } = context ?? {};
	
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
	} = query!;

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
				{ProjectPatchModel.map((item) => {
					return (
						<Fragment key={`${item.title}`}>
							<PatchModele
								item={item!}
								handleInfo={handleProjectInfo!}
								handleDateInfo={handleProjectDateInfo!}
							/>
						</Fragment>
					);
				})}
			</DemoContainer>
		</LocalizationProvider>
	);
};
