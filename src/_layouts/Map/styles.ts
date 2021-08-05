import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;

  position: relative;

  grid-template-areas:
    'Navbar'
    'Main';

  grid-template-rows: 2.5rem 100%;
`;
