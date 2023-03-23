import React, { memo, useEffect, useRef, useState } from 'react';
import {
	Box,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from '@mui/material';
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
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		dispatch(setSearchValue(debouncedValue));
		if (searchProps.critery && inputRef.current) {
			inputRef.current.focus();
		}
	}, [debouncedValue, searchProps.critery]);

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
				<TextField
					sx={{ maxWidth: '150px', mr: 5 }}
					id='outlined-multiline-flexible'
					inputRef={inputRef}
					label='Search'
					size='small'
					maxRows={2}
					onChange={(e) => handleChageValue(e)}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start' sx={{ marginLeft: '6px' }}>
								<SearchIcon />
							</InputAdornment>
						),
						sx: {
							paddingLeft: '0px',
						},
					}}
				/>
			</Box>
			<Box>
				<InputLabel
					id='demo-simple-select-label'
					sx={{ fontSize: '12px', mt: '-17px' }}>
					Property List
				</InputLabel>
				<Select
					size='small'
					label='Property List'
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					sx={{ width: '150px' }}
					value={searchProps.critery}
					onChange={(e) => handleChangeCritery(e)}>
					{SelectColumns?.map((column, index) => (
						<MenuItem value={column.title} key={`${column} - ${index}`}>
							{column.title.slice(0, 1).toUpperCase() + column.title.slice(1)}
						</MenuItem>
					))}
				</Select>
			</Box>
		</Flexbox>
	);
});

SearchByProperties.displayName = 'SearchByProperties';
