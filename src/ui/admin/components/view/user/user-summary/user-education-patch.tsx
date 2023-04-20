import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Fragment, useContext } from 'react';
import { PatchModele } from '../../../layout/patch-modele';
import { educationContext } from './user-education-item';
import { PatchItem } from '../../../../../../types/common/patch-item';

export const UserEducationPatch = () => {
	const context = useContext(educationContext);
	const { query, handleUnivercityDateInfo, handleUnivercityInfo } =
		context ?? {};
	const patchModel = [
		{
			title: 'Name of University',
			value: query?.universityName,
			argumentName: 'universityName',
		},
		{
			title: 'Specialization',
			value: query?.specialization,
			argumentName: 'specialization',
		},
		{
			title: 'Pricing model',
			value: query?.pricingModel,
			argumentName: 'pricingModel',
		},
		{
			title: 'Start date',
			value: query?.startDate,
			date: true,
			argumentName: 'startDate',
		},
		{
			title: 'End date',
			value: query?.endDate,
			date: true,
			argumentName: 'endDate',
		},
	];
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DateRangePicker']}>
					{patchModel.map((item: PatchItem) => (
						<PatchModele
							key={item.title}
							item={item}
							handleInfo={handleUnivercityInfo!}
							handleDateInfo={handleUnivercityDateInfo!}
						/>
					))}
				</DemoContainer>
			</LocalizationProvider>
		</>
	);
};
