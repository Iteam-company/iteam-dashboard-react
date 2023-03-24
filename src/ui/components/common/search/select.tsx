import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { SeacrhColumn } from '../../../../types/admin/search';
import { Criteries } from '../../../../types/admin/users/criteries';
import { SearchProps } from '../../../../types/common/api/users/search';

type Props = {
	text?: string;
	handleChange: (event: SelectChangeEvent<Criteries>) => void;
	SelectColumns: Array<SeacrhColumn>;
	inputValue: SearchProps;
};

export const SearchSelect: FC<Props> = ({
	text = 'Property List',
	handleChange,
	SelectColumns,
	inputValue,
}) => {
	return (
		<>
			<InputLabel
				id='demo-simple-select-label'
				sx={{ fontSize: '12px', mt: '-17px' }}>
				{text}
			</InputLabel>
			<Select
				size='small'
				label='Property List'
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				sx={{ width: '150px' }}
				value={inputValue.critery}
				onChange={(e) => handleChange(e)}>
				{SelectColumns.map((column, index) => (
					<MenuItem value={column.title} key={`${column} - ${index}`}>
						{column.title.slice(0, 1).toUpperCase() + column.title.slice(1)}
					</MenuItem>
				))}
			</Select>
		</>
	);
};
