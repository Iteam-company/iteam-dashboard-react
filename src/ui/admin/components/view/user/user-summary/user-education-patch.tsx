import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Input } from '../../../../../components/common/input';
import { Typography } from '@mui/material';
import { FC } from 'react';
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
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DateRangePicker']}>
					<Typography>Name of University</Typography>
					<Input
						name='university name'
						value={query.universityName}
						handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUnivercityInfo(e, 'universityName')
						}
					/>
					<Typography>fac</Typography>
					<Input
						name='specialization'
						value={query.specialization}
						handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUnivercityInfo(e, 'specialization')
						}
					/>
					<Typography>pricing model</Typography>
					<Input
						name='pricing model'
						value={query.pricingModel}
						handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUnivercityInfo(e, 'pricingModel')
						}
					/>
					<Typography>Start Date</Typography>
					<DatePicker
						value={query.startDate}
						onChange={(date: Date | null) =>
							handleUnivercityDateInfo(date, 'startDate')
						}
					/>
					<Typography>End Date</Typography>
					<DatePicker
						value={query.endDate}
						onChange={(date: Date | null) =>
							handleUnivercityDateInfo(date, 'endDate')
						}
					/>
				</DemoContainer>
			</LocalizationProvider>
		</>
	);
};
