import { Box, Card, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React from 'react';

type Props = {
  UserExperienceItem? : JSX.Element;
  UserSkillsItem?: JSX.Element;
  UserEducationItem?: JSX.Element;
  UserAboutItem?: JSX.Element;
  title: string;
}

export const UserCardTop: React.FC<Props> = ({ UserExperienceItem, UserEducationItem, UserSkillsItem, UserAboutItem, title }) => {
  return (
    <Card sx={{p: 2, mb: 2}}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }} contentEditable={true}>

        <Typography variant='h6' sx={{mb: 2}}>
          { title }
        </Typography>
        <Box>
          <AddOutlinedIcon sx={{mr: 3, cursor: 'pointer'}}/>
          <CreateOutlinedIcon sx={{cursor: 'pointer'}}/>
        </Box>
      </Box>
      {UserExperienceItem}
      {UserEducationItem}
      {UserSkillsItem}
      {UserAboutItem}
    </Card>
  )
}

