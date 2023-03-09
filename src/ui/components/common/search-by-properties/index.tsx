import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { Flexbox } from '../mocked/flexbox';
import SearchIcon from '@mui/icons-material/Search';
import {
	setSearchCritery,
	setSearchValue,
	userSearch,
} from '../../../../store/slices/user-search-slice';
import { useAppDispatch } from '../../../../hooks/store/use-app-dispatch-hook';
import { useDebounce } from '../../../../hooks/debounce/use-debounce';
import { SelectColumns } from '../../../../constants/admin/search-select-column-schema';
import { useAppSelector } from '../../../../hooks/store/use-app-selector-hook';
import { Criteries } from '../../../../types/admin/users/criteries';

export const SearchByProperties = memo(() => {
	const searchProps = useAppSelector(userSearch);
	const dispatch = useAppDispatch();
	const [value, setValue] = useState('');
	const debouncedValue = useDebounce<string>(value, 500);

	useEffect(() => {
		dispatch(setSearchValue(debouncedValue));
		console.log(searchProps.critery)
	}, [debouncedValue]);

	const handleChageValue = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setValue(event.target.value);
	};

	const handleChangeCritery = (event: SelectChangeEvent<Criteries>) => {
		dispatch(setSearchCritery(event.target.value as Criteries));
	};

	return (
		<Flexbox>
			<Box>
				<Typography sx={{ fontSize: '12px', ml: 1 }}>Search</Typography>
				<TextField
					sx={{ maxWidth: '150px', mr: 5 }}
					id='outlined-multiline-flexible'
					label=''
					size='small'
					multiline
					maxRows={4}
					onChange={(e) => handleChageValue(e)}
					InputProps={{
						startAdornment: <SearchIcon />,
					}}
				/>
			</Box>
			<Box>
				<Typography sx={{ fontSize: '12px', ml: 1 }}>Property List</Typography>
				<Select
					size='small'
					sx={{ width: '150px' }}
					value={searchProps.critery}
					onChange={(e) => handleChangeCritery(e)}>
					{SelectColumns?.map((column, index) => (
						<MenuItem value={column.title} key={`${column} - ${index}`}>
							{column.title}
						</MenuItem>
					))}
				</Select>
			</Box>
		</Flexbox>
	);
});

SearchByProperties.displayName = 'SearchByProperties';
