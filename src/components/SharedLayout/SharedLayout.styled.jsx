import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  background: rgb(11, 49, 62);
  background: linear-gradient(
    90deg,
    rgba(11, 49, 62, 1) 20%,
    rgba(231, 99, 16, 1) 50%,
    rgba(11, 49, 62, 1) 80%
  );
`;

export const ContentContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
