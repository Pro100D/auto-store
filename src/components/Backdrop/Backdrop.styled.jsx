import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: visible;
  opacity: 1;
  pointer-events: auto;
`;
