import styled from 'styled-components';

export const LottieContainer = styled.div`
  width: 50%;
`;

export const SoonIntroduction = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  > div {
    display: flex;
    align-items: center;

    > h1 {
      font-size: ${({ theme }) => theme.fontSize.huge};
      font-weight: 600;
    }

    > h2 {
      font-weight: 400;
      margin-left: 1rem;
    }
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid white;
    outline: 0;

    padding: 1rem 2rem;
    margin-top: 1rem;
    border-radius: 0.3rem;

    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.fontSize.normal};

    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
