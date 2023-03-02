import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { memo } from 'react';
import { Flexbox } from '../mocked/flexbox';
import SearchIcon from '@mui/icons-material/Search';
import { columns } from '../../../../constants/admin/columns-schema';

export const SearchByProperties = memo(() => {
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
					InputProps={{
						startAdornment: <SearchIcon />,
					}}
				/>
			</Box>
			<Box>
				<Typography sx={{ fontSize: '12px', ml: 1 }}>Property List</Typography>
				<Select size='small' sx={{ width: '150px' }} label='age'>
					{columns?.map((column, index) => (
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
