import { Card } from '@mui/material';
import React, { useState } from 'react';
import { UserCardTop } from '../../reusable/user-card-top';
import { UserAboutItem } from './user-about-item';

export const UserAbout = () => {
  const [title] = useState('About');
  return (
    <Card sx={{p: 2, mb: 2}}>
    <UserCardTop title={title}>
    <UserAboutItem />
    </UserCardTop>
    </Card>
  )
}

