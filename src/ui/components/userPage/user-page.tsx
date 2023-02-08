import React from 'react';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserInfo } from './userPageBlocks/user-info';
import { UserAbout } from './userPageBlocks/user-about';
import { UserEducation } from './userPageBlocks/user-education';
import { UserExperience } from './userPageBlocks/user-experience';
import { UserSkills } from './userPageBlocks/user-skills';

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
