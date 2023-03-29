import { Box, Paper } from '@mui/material';
import { memo, useMemo, useState } from 'react';
import { useGetAllUsersQuery } from '../../../../api/users';
import { useDebouncedState } from '../../../../hooks/debounce/use-debounced-state';
import { Flexbox } from '../../../components/common/flex-box';
import { SearchInput } from '../../../components/common/search/input';
import { CommonTable } from '../../../components/common/table';

export const Users = memo(() => {
	const [query, setQuery] = useState('');
	const [debouncedQuery, setDebounceQuery] = useDebouncedState('', 1000);

	const { data: rawData, isLoading, isFetching } = useGetAllUsersQuery();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setDebounceQuery(event.target.value);
	};

	const data = useMemo(() => {
		const searchValue = debouncedQuery.toLocaleLowerCase();
		if (!rawData) {
			return [];
		}

		return rawData.data.filter((user) => {
			const { name, surname, email, status } = user;
			return [name, surname, email, status].some((value) =>
				value?.toLowerCase().includes(searchValue),
			);
		});
	}, [rawData, debouncedQuery]);

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
							<SearchInput inputValue={query} handleChange={handleChange} />
							{debouncedQuery}
						</Box>
					</Flexbox>
				</Paper>
				<Paper elevation={0} sx={{ height: '100%' }}>
					<CommonTable
						isLoading={isLoading}
						data={data}
						isFetching={isFetching}
					/>
				</Paper>
			</Box>
		</Box>
	);
});

Users.displayName = 'Users';
