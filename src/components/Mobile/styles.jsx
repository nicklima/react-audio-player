import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.mobile};

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-around;
  overflow: hidden;
  padding: 10px;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    border-radius: 30px;
    height: 650px;
    min-height: auto;
    width: 340px;
  }
`;
