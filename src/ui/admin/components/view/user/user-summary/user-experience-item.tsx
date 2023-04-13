import { Box } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateUserMutation } from '../../../../../../api/user';
import { useDebouncedState } from '../../../../../../hooks/debounce/use-debounced-state';
import { User } from '../../../../../../types/common/api/user';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { UserCardWrapper } from './user-card-wrapper';

type Props = {
	data: User;
};

export const UserExperienceItem: FC<Props> = ({ data }) => {
	const { id } = useParams();
	const { experience } = objectFieldChecker<User>(data);
	const [debouncedQuery, setDebounceQuery] = useDebouncedState('', 1000);
	const [title] = useState('Experience');
	const [query, setQuery] = useState('');
	const [open, setOpen] = useState(false);
	const [update, { isSuccess, isLoading }] = useUpdateUserMutation();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setQuery(event.target.value);
		setDebounceQuery(event.target.value);
	};

	const handleSubmit = useCallback(() => {
		update({ id: +id!, experience: debouncedQuery });
	}, [id, isSuccess, isLoading]);

	useEffect(() => {
		isSuccess && setOpen(false);
	}, [isSuccess]);

	return (
		<UserCardWrapper
			title={title}
			modal={
				<EditModal
					isLoading={isLoading}
					experience={true}
					text={'experience'}
					query={query}
					handleChange={handleChange}
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
