import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
