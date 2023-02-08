import React, { useState } from 'react';
import { UserCardTop } from '../../reusable/user-card-top';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
  const [title] = useState('Experience');
  return (
    <UserCardTop UserExperienceItem={<UserExperienceItem />} title={title}/>
  )
}