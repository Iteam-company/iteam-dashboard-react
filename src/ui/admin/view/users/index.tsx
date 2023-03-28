import { Box, Paper } from '@mui/material';
import { memo, useState } from 'react';
import { useGetAllUsersQuery } from '../../../../api/users';
import { unionPart } from '../../../../types/common/user-part';
import { Flexbox } from '../../../components/common/flex-box';
import { SearchInput } from '../../../components/common/search/input';
import { CommonTable } from '../../../components/common/table';

export const Users = memo(() => {
	const [query, setQuery] = useState('');

	const { data, isLoading, isFetching } = useGetAllUsersQuery();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleCheckUsersFields = (...userPart: unionPart[]) => {
		return userPart.find((userInfo: string | null) => {
			if (userInfo) {
				return userInfo.toLowerCase().includes(query.toLocaleLowerCase());
			}

			return;
		});
	};

	const filteredUsers = data?.data.filter((user) => {
		const { name, surname, email, status } = user;

		return handleCheckUsersFields(name, surname, email, status);
	});

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				p: 2,
				height: '100%',
			}}>
			<Box
				sx={{
					mt: '20px',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					height: '100%',
				}}>
				<Paper sx={{ p: 2, pt: 3 }}>
					<Flexbox>
						<Box>
							<SearchInput query={query} handleChange={handleChange} />
						</Box>
					</Flexbox>
				</Paper>
				<Paper elevation={0} sx={{ height: '100%' }}>
					<CommonTable
						isLoading={isLoading}
						data={filteredUsers}
						isFetching={isFetching}
					/>
				</Paper>
			</Box>
		</Box>
	);
});

Users.displayName = 'Users';
