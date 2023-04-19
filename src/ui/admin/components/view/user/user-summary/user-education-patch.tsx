import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Input } from '../../../../../components/common/input';
import { Typography } from '@mui/material';
import { FC, Fragment } from 'react';
import { EducationInfo } from '../../../../../../types/common/api/user/education-info';

type Props = {
	query: Partial<EducationInfo>;
	handleUnivercityInfo: (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof EducationInfo,
	) => void;
	handleUnivercityDateInfo: (
		date: Date | null,
		name: keyof EducationInfo,
	) => void;
};
export const UserEducationPatch: FC<Props> = ({
	query,
	handleUnivercityInfo,
	handleUnivercityDateInfo,
}) => {
	const patchModel = [
		{
			title: 'Name of University',
			value: query.universityName,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
				handleUnivercityInfo(e, 'universityName'),
		},
		{
			title: 'Specialization',
			value: query.specialization,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
				handleUnivercityInfo(e, 'specialization'),
		},
		{
			title: 'Pricing model',
			value: query.pricingModel,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
				handleUnivercityInfo(e, 'pricingModel'),
		},
		{
			title: 'Start date',
			value: query.startDate,
			date: true,
			onChange: (date: Date | null) =>
				handleUnivercityDateInfo(date, 'startDate'),
		},
		{
			title: 'End date',
			value: query.endDate,
			date: true,
			onChange: (date: Date | null) =>
				handleUnivercityDateInfo(date, 'endDate'),
		},
	];
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DateRangePicker']}>
					{patchModel.map((item, index) => {
						if (item.date) {
							return (
								<Fragment key={`${item.title}_${index}`}>
									<Typography>{item.title}</Typography>
									<DatePicker value={item.value} onChange={item.onChange} />
								</Fragment>
							);
						}
						return (
							<Fragment key={`${item.title}_${index}`}>
								<Typography>{item.title}</Typography>
								<Input
									name={item.title}
									value={item.value as string}
									handleChange={item.onChange}
								/>
							</Fragment>
						);
					})}
				</DemoContainer>
			</LocalizationProvider>
		</>
	);
};
