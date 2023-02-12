import React from 'react';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserInfo } from '../../components/user/user-info';
import { UserAbout } from '../../components/user/user-about';
import { UserEducation } from '../../components/user/user-education';
import { UserExperience } from '../../components/user/user-experience';
import { UserSkills } from '../../components/user/user-skills';

const theme = createTheme();

export const UserPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='md'>
				<UserInfo />
				<UserAbout />
				<UserExperience />
				<UserEducation />
				<UserSkills />
			</Container>
		</ThemeProvider>
	);
};
