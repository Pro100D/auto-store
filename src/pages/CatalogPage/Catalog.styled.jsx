import styled from '@emotion/styled';
import { theme } from 'styles/idnex';

export const CatalogSection = styled.section`
  width: 1184px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
`;

export const LoadMoreBtn = styled.button`
  display: block;

  color: ${theme.colors.mainColor};

  font-size: 16px;

  line-height: calc(24 / 16);
  text-decoration-line: underline;

  background-color: transparent;
  border: none;

  margin: 0 auto;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.activeColor};
  }
`;
