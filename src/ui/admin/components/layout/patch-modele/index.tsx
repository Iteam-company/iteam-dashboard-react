import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FC } from 'react';
import { EducationInfo } from '../../../../../types/common/api/user/education-info';
import { Project } from '../../../../../types/common/api/user/project';
import { PatchItem } from '../../../../../types/common/patch-item';
import { Input } from '../../../../components/common/input';

type Props = {
	item: PatchItem;
	handleInfo: (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof (EducationInfo | Project),
	) => void;
	handleDateInfo: (
		date: Date | null,
		name: keyof (EducationInfo | Project),
	) => void;
};

export const PatchModele: FC<Props> = ({
	item,
	handleInfo,
	handleDateInfo,
}) => {
	let layout;
	if (item.date) {
		layout = (
			<>
				<Typography>{item.title}</Typography>
				<DatePicker />
			</>
		);
	} else {
		layout = (
			<>
				<Typography>{item.title}</Typography>
				<Input
					name={item.title}
					value={item.value as string}
					handleChange={(e) =>
						handleInfo(e, item.argumentName as keyof (EducationInfo | Project))
					}
				/>
			</>
		);
	}

	return <>{layout}</>;
};
