import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: Navbar;

  height: 2.5rem;

  > img {
    width: 10rem;
    height: auto;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  background: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.small};

  padding: 1rem 2rem;
`;
