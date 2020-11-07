import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItem.styles';

const MenuItem = ({ section, history, match }) => {
  const { title, coverImage } = section;
  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.path}shop/${title.toLowerCase()}`)}
    >
      <BackgroundImageContainer imageUrl={coverImage} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
