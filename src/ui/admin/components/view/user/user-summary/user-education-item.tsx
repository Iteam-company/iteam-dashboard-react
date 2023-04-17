import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { FC, Fragment, useState } from 'react';
import { useUpdateUserMutation } from '../../../../../../api/user';
import { User } from '../../../../../../types/common/api/user';
import { EducationInfo } from '../../../../../../types/common/api/user/education-info';
import { Flexbox } from '../../../../../components/common/flex-box';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { UserCardWrapper } from './user-card-wrapper';
import { UserEducationPatch } from './user-education-patch';

type Props = {
	data: User;
};

export const UserEducationItem: FC<Props> = ({ data }) => {
	const [update] = useUpdateUserMutation();
	const [query, setQuery] = useState({
		id: data.id,
		startDate: null,
		endDate: null,
		universityName: '',
		specialization: '',
		pricingModel: '',
	});
	console.log(query);
	const { educationInfo } = objectFieldChecker<User>(data);
	const title = 'Education';

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const onSubmit = () => update(query);

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
	console.log(educationInfo);
	if (educationInfo.length) {
		layout = educationInfo.map((item) => {
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
		});
	} else {
		layout = 'N/A';
	}

	return (
		<UserCardWrapper
			title={title}
			modal={
				<EditModal
					handleSubmit={onSubmit}
					element={
						<Box>
							<UserEducationPatch
								query={query}
								handleUnivercityInfo={handleUnivercityInfo}
								handleUnivercityDateInfo={handleUnivercityDateInfo}
							/>
						</Box>
					}
				/>
			}
			open={open}
			handleClose={handleClose}
			handleOpen={handleOpen}>
			<>
				<Flexbox sx={{ gridGap: '16px' }}>
					<Box
						component='img'
						alt='user-avatar'
						src='https://via.placeholder.com/50'
						sx={{ maxWidth: '50px', maxHeight: '50px' }}
					/>
					{layout}
				</Flexbox>
			</>
		</UserCardWrapper>
	);
};
