import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { createContext, FC, Fragment, useEffect, useState } from 'react';
import { useUpdateUserMutation } from '../../../../../../api/user';
import { User } from '../../../../../../types/common/api/user';
import { EducationInfo } from '../../../../../../types/common/api/user/education-info';
import { EducationContext } from '../../../../../../types/common/context/education';
import { Flexbox } from '../../../../../components/common/flex-box';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { CardWrapper } from './user-card-wrapper';
import { UserEducationPatch } from './user-education-patch';

export const educationContext = createContext<EducationContext | null>(null);

type Props = {
	data: User;
};

export const UserEducationItem: FC<Props> = ({ data }) => {
	const [update, { isSuccess }] = useUpdateUserMutation();

	const { educationInfo } = objectFieldChecker<User>(data);

	const [query, setQuery] = useState({
		id: data.id,
		startDate: null,
		endDate: null,
		universityName: '',
		specialization: '',
		pricingModel: '',
	});
	const title = 'Education';

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const onSubmit = () => update(query);
	useEffect(() => {
		if (isSuccess) {
			handleClose();
		}
	}, [isSuccess]);

	const handleUnivercityInfo = (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof EducationInfo,
	) => {
		setQuery((prev) => ({ ...prev, [name]: event.target.value }));
	};

	const handleUnivercityDateInfo = (
		date: Date | null,
		name: keyof EducationInfo,
	) => {
		setQuery((prev) => ({
			...prev,
			[name]: moment(date).format('DD/MM/YYYY'),
		}));
	};
	let layout;
	if (educationInfo.length) {
		layout = (
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				{educationInfo.map((item) => {
					const { universityName, specialization, startDate } = item;
					return (
						<Flexbox key={item.id} sx={{ gridGap: '16px' }}>
							<Box
								component='img'
								alt='user-avatar'
								src='https://via.placeholder.com/50'
								sx={{ maxWidth: '50px', maxHeight: '50px' }}
							/>
							<Box>
								<Typography variant='body2' sx={{ fontWeight: '800' }}>
									{universityName}
								</Typography>
								<Typography variant='body2'>{specialization}</Typography>
								<Typography variant='body2'>{startDate?.toString()}</Typography>
							</Box>
						</Flexbox>
					);
				})}
			</Box>
		);
	} else {
		layout = 'N/A';
	}

	return (
		<educationContext.Provider
			value={{ query, handleUnivercityInfo, handleUnivercityDateInfo }}>
			<CardWrapper
				title={title}
				modal={
					<EditModal
						handleSubmit={onSubmit}
						element={
							<Box>
								<UserEducationPatch />
							</Box>
						}
					/>
				}
				open={open}
				handleClose={handleClose}
				handleOpen={handleOpen}>
				<>{layout}</>
			</CardWrapper>
		</educationContext.Provider>
	);
};
