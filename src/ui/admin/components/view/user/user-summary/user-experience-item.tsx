import { Box, TextareaAutosize } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useUpdateUserMutation } from '../../../../../../api/user';
import { User } from '../../../../../../types/common/api/user';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { UserCardWrapper } from './user-card-wrapper';

type Props = {
	data: User;
};

export const UserExperienceItem: FC<Props> = ({ data }) => {
	const { experience, id } = objectFieldChecker<User>(data);
	const title = 'Experience';
	const [query, setQuery] = useState(experience as string);
	const [open, setOpen] = useState(false);
	const [update, { isSuccess, isLoading }] = useUpdateUserMutation();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setQuery(event.target.value);
	};
	const handleSubmit = useCallback(() => {
		update({ id: +id!, experience: query });
	}, [id, isSuccess, isLoading, query]);

	useEffect(() => {
		isSuccess && setOpen(false);
	}, [isSuccess]);

	return (
		<UserCardWrapper
			title={title}
			modal={
				<EditModal
					isLoading={isLoading}
					element={
						<TextareaAutosize
							minRows='10'
							value={query}
							onChange={handleChange}></TextareaAutosize>
					}
					text={'add experience'}
					handleSubmit={handleSubmit!}
				/>
			}
			open={open}
			handleOpen={handleOpen}
			handleClose={handleClose}>
			<Box>{experience}</Box>
		</UserCardWrapper>
	);
};
