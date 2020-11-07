import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import { DirectoryMenuContainer } from './Directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
