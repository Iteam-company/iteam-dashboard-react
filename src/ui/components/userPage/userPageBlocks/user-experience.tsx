import { Card } from '@mui/material';
import React, { useState } from 'react';
import { UserCardTop } from '../../reusable/user-card-top';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
  const [title] = useState('Experience');
  return (
    <Card sx={{p: 2, mb: 2}}>
    <UserCardTop title={title}>
    <UserExperienceItem />
    </UserCardTop>
    </Card>
  )
}
