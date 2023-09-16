import styled from '@emotion/styled';
import { theme } from 'styles/idnex';

export const ItemCar = styled.li`
  width: 274px;
`;

export const ImgContainer = styled.div`
  position: relative;

  height: 268px;
  overflow: hidden;

  margin-bottom: 14px;

  border-radius: 14px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 268px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;

  border: transparent;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const NameCarText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const InfoCarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-bottom: 28px;
`;

export const InfoCarItem = styled.li`
  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  padding-right: 6px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
`;

export const ReadMoreBtn = styled.button`
  padding: 12px 99px;

  border-radius: 12px;
  border-color: transparent;

  font-size: 14px;
  line-height: calc(20 / 14);

  color: #ffffff;
  background-color: ${theme.colors.mainColor};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors.activeColor};
  }
`;
