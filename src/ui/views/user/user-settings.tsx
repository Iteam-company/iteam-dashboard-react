import React, { useState } from 'react';
import {
	Box,
	Container,
	FormControl,
	FormControlLabel,
	Grid,
	Input,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Radio,
	Select,
	Slider,
	TextField,
	Typography,
} from '@mui/material';
import { UserSettingsTextField } from '../../components/user-settings/user-settings-textfield';
import { UserSettingsSalary } from '../../components/user-settings/user-settings-salary';
import { UserSettingsExperience } from '../../components/user-settings/user-settings-experience';
import { UserSettingsSelect } from '../../components/user-settings/user-settings-select';
import { UserSettingsLanguagelevel } from '../../components/user-settings/user-settings-language-level';

export const UserSettings = () => {
	const [positionTitle] = useState('Посада');
	const [country] = useState('Країна');
	const [city] = useState('Місто');
	const [skills] = useState('Навички');
	const [category] = useState('Категорії');
	const [subtitle] = useState('Lorem, ipsum dolor.');
	return (
		<Container maxWidth='md' sx={{ mt: 6 }}>
			<Grid container spacing={2} sx={{ alignItems: 'center' }}>
				<UserSettingsTextField title={positionTitle} />
				<UserSettingsSalary />
				<UserSettingsExperience />
				<UserSettingsSelect title={country} />
				<UserSettingsTextField title={city} subtitle={subtitle} />
				<UserSettingsTextField title={skills} subtitle={subtitle} />
				<UserSettingsSelect title={category} />
				<UserSettingsLanguagelevel />
			</Grid>
		</Container>
	);
};

UserSettings.displayName = 'UserSettings';
