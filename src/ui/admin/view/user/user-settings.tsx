import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { UserSettingsTextField } from '../../components/view/user/user-settings/user-settings-textfield';
import { UserSettingsSalary } from '../../components/view/user/user-settings/user-settings-salary';
import { UserSettingsExperience } from '../../components/view/user/user-settings/user-settings-experience';
import { UserSettingsSelect } from '../../components/view/user/user-settings/user-settings-select';
import { UserSettingsLanguagelevel } from '../../components/view/user/user-settings/user-settings-language-level';

export const UserSettings = () => {
	const [positionTitle] = useState('Посада');
	const [country] = useState('Країна');
	const [city] = useState('Місто');
	const [skills] = useState('Навички');
	const [category] = useState('Категорії');
	const [subtitle] = useState('Lorem, ipsum dolor.');
	const [englishLevelTitle] = useState('Рівень Англійської');
	const [userExperienceTitle] = useState('Досвід роботи');
	const [userSallaryTitle] = useState('Зарплатні очікування');
	return (
		<Container maxWidth='md' sx={{ mt: 6 }}>
			<Grid container spacing={2} sx={{ alignItems: 'center' }}>
				<UserSettingsTextField title={positionTitle} />
				<UserSettingsSalary title={userSallaryTitle} />
				<UserSettingsExperience title={userExperienceTitle} />
				<UserSettingsSelect title={country} />
				<UserSettingsTextField title={city} subtitle={subtitle} />
				<UserSettingsTextField title={skills} subtitle={subtitle} />
				<UserSettingsSelect title={category} />
				<UserSettingsLanguagelevel title={englishLevelTitle} />
			</Grid>
		</Container>
	);
};

UserSettings.displayName = 'UserSettings';
