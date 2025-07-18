import styled from "styled-components";

export const GridSettings = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 50px auto;
  grid-gap: 5px;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
  padding: 0 20px;
`;

export const Button = styled.button`
  background: ${({ $active, theme }) =>
    $active ? theme.controlButton : "transparent"};
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  padding: 8px;
  transition: all 0.5s;
  text-align: center;
  width: 50px;

  svg {
    fill: ${({ theme }) => theme.text};
  }
`;

export const CloseButton = styled.div`
  background: ${({ theme }) => theme.mobile};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  position: relative;
  width: 28px;

  &:before,
  &:after {
    border-radius: 50%;
    content: "";
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    background: ${({ theme }) => theme.text};
    height: 80%;
    width: 80%;
    z-index: 2;
  }

  &:after {
    background: ${({ theme }) => theme.mobile};
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    z-index: 3;
  }
`;
