import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${({ theme }) => theme.colors.primary};
`;
