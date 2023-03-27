import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FC, ReactElement } from 'react';

type Props = {
	inputRef?: React.MutableRefObject<HTMLInputElement | null>;
	icon?: ReactElement;
	handleChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
};

export const SearchInput: FC<Props> = ({
	inputRef,
	icon = <SearchIcon />,
	handleChange,
}) => {
	return (
		<TextField
			sx={{ maxWidth: '150px', mr: 5 }}
			id='outlined-multiline-flexible'
			inputRef={inputRef}
			label='Search'
			size='small'
			maxRows={2}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start' sx={{ marginLeft: '6px' }}>
						{icon}
					</InputAdornment>
				),
				sx: {
					paddingLeft: '0px',
				},
			}}
		/>
	);
};
