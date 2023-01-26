import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 500px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: wheat;
  & input {
    background-color: wheat;
    transition: all 200ms;
    border-radius: 10px;

    &:hover,
    :focus {
      scale: 1.1;
      transition: all 200ms;
    }
  }
  & button {
    background-color: orange;
    border-radius: 10px;
    transition: all 200ms;
    &:hover,
    :focus {
      scale: 1.1;
      transition: all 200ms;
    }
  }
`;
