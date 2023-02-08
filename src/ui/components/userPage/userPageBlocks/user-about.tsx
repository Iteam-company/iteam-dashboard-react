import React, { useState } from 'react';
import { UserCardTop } from '../../reusable/user-card-top';
import { UserAboutItem } from './user-about-item';

export const UserAbout = () => {
  const [title] = useState('About');
  return (
    <UserCardTop title={title} UserAboutItem={<UserAboutItem />}/>
  )
}