import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Flexbox from './flexbox';
import { ChangeEvent, FC, memo, useEffect, useState, useDeferredValue } from 'react';
import { userBySearching } from '../../../store/slices/users-slice';
import { columns } from '../../../constants/generate-column/generate-column';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { User } from '../../../types/common/api/user/index';

type Props = {
	children: JSX.Element;
};

export const SearchByProperties: FC<Props> = memo(({ children }) => {
	const [properties, setProperties] = useState<keyof User>('email');
	const [query, setQuery] = useState('');
	const dispatch = useAppDispatch();
	const deferredQuery = useDeferredValue(query);

	const handleChange = (event: SelectChangeEvent) => {
		setProperties(event.target.value as keyof User);
	};

	const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	useEffect(() => {
		dispatch(userBySearching({ properties, deferredQuery }));
	}, [properties, query, deferredQuery]);
	return (
		<>
			<Box sx={{ mt: 1 }}>
				<Flexbox>
					<Box sx={{ ml: 2 }}>
						<Typography sx={{ fontSize: '12px', ml: 1 }}>Search</Typography>
						<TextField
							sx={{ maxWidth: '150px', mr: 5 }}
							id='outlined-multiline-flexible'
							label=''
							size='small'
							multiline
							maxRows={4}
							value={query}
							onChange={handleQuery}
							InputProps={{
								startAdornment: <SearchIcon />,
							}}
						/>
					</Box>
					<Box>
						<Typography sx={{ fontSize: '12px', ml: 1 }}>
							Property List
						</Typography>
						<Select
							size='small'
							displayEmpty
							sx={{ width: '150px' }}
							value={properties}
							onChange={handleChange}>
							{columns?.map((column, index) => (
								<MenuItem
									value={column.title}
									key={`${column} - ${index}`}>
									{column.title}
								</MenuItem>
							))}
						</Select>
					</Box>
				</Flexbox>
			</Box>
			{children}
		</>
	);
});


SearchByProperties.displayName = 'SearchByProperties';