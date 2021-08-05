import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};

  z-index: 1;

  left: 1px;
  top: calc(40vh - 2rem);

  > h1 {
    padding: 1rem 0;
    text-align: center;
  }

  > form {
    display: flex;
    flex-direction: column;
    margin: 1rem;

    > input {
      padding: 10px 10px;
      margin-top: 1rem;
    }
  }
`;

export const WannaDrive = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text.white};

  padding: 1.5rem 2rem;

  > h1 {
    font-weight: 600;
  }
`;
