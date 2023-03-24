import React, { memo, useEffect, useRef, useState } from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { Flexbox } from '../../../../../styles/flex-box';

import {
	setSearchCritery,
	setSearchValue,
	userSearch,
} from '../../../../../store/slices/user-search-slice';
import { useAppDispatch } from '../../../../../hooks/store/use-app-dispatch-hook';
import { useDebounce } from '../../../../../hooks/debounce/use-debounce';
import { SelectColumns } from '../../../../../constants/admin/search-select-column-schema';
import { useAppSelector } from '../../../../../hooks/store/use-app-selector-hook';
import { Criteries } from '../../../../../types/admin/users/criteries';
import { SearchInput } from '../../../../components/common/search/input';
import { SearchSelect } from '../../../../components/common/search/select';

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
				<SearchInput inputRef={inputRef} handleChange={handleChageValue} />
			</Box>
			<Box>
				<SearchSelect
					inputValue={searchProps}
					handleChange={handleChangeCritery}
					SelectColumns={SelectColumns}
				/>
			</Box>
		</Flexbox>
	);
});

SearchByProperties.displayName = 'SearchByProperties';
