import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.85;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;
    }
    ${AddButton} {
      display: flex;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
