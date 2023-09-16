import { AiOutlineClose } from 'react-icons/ai';
import styled from '@emotion/styled';
import { theme } from 'styles/idnex';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 541px;

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 25px;
`;

export const ProfileCancelBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 2px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: '#3470FF';
`;

export const ModalImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  height: 248px;
  width: 461px;

  overflow: hidden;

  border-radius: 14px;

  margin: 0 auto;

  margin-bottom: 14px;
`;

export const ModalImg = styled.img`
  object-fit: cover;

  width: 469px;
  height: 314px;
`;

export const ContainerTextInModal = styled.div`
  margin-top: 8px;

  width: 300px;
`;

export const DescriptionCar = styled.p`
  font-size: 14px;
  line-height: calc(20 / 14);

  margin-bottom: 24px;
`;

export const Title = styled.h3`
  font-size: 14px;
  line-height: calc(20 / 14);
  font-style: normal;
  font-weight: 500;

  margin-bottom: 8px;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;
export const RentalItem = styled.li`
  padding: 7px 14px;

  background-color: #f9f9f9;
  color: #363535;

  border-radius: 35px;

  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const Span = styled.span`
  color: ${theme.colors.mainColor};
`;

export const RentalBtn = styled.a`
  padding: 12px 50px;

  border-radius: 12px;

  color: #ffffff;
  background-color: ${theme.colors.mainColor};

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${theme.colors.activeColor};
  }
`;
