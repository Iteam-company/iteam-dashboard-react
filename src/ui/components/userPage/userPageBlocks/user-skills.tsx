import React, { useState } from 'react';
import { UserCardTop } from '../../reusable/user-card-top';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
  const [title] = useState('Skills')
  return (
    <UserCardTop UserSkillsItem={<UserSkillsItem/>} title={title}/>
  )
}
