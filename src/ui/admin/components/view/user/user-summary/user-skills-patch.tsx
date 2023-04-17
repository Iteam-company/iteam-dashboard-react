import { Autocomplete, Checkbox, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import React, { ChangeEvent, FC } from 'react';
import { Button } from '@mui/material';
import { Flexbox } from '../../../../../components/common/flex-box';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

type Props = {
	handleTechnologiesChange: (
		event: ChangeEvent<object>,
		value: string[],
	) => void;
	selectedTechnologies: Array<string>;
	onSubmit: () => void;
};
export const UserSkillsPatch: FC<Props> = ({
	handleTechnologiesChange,
	selectedTechnologies,
	onSubmit,
}) => {
	return (
		<Flexbox sx={{ gridGap: '16px' }}>
			<Autocomplete
				multiple
				id='checkboxes-tags-demo'
				options={Technologies}
				value={selectedTechnologies}
				disableCloseOnSelect
				getOptionLabel={(option) => option}
				renderOption={(props, option, { selected }) => (
					<ul>
						<li {...props}>
							<Checkbox
								icon={icon}
								checkedIcon={checkedIcon}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option}
						</li>
					</ul>
				)}
				style={{ width: 500 }}
				renderInput={(params) => (
					<TextField {...params} label='Checkboxes' placeholder='Favorites' />
				)}
				onChange={handleTechnologiesChange}
			/>
			<Button
				variant='contained'
				color='primary'
				type='submit'
				onClick={onSubmit}>
				Change
			</Button>
		</Flexbox>
	);
};

const Technologies = ['Angular', 'React', 'Redux', 'Redux Saga'];
