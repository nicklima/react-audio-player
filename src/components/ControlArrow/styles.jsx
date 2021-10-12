import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.text};
    width: 40px;
  }

  transform: ${({ reverse }) => (reverse ? "rotate(180deg)" : "rotate(0deg)")};
`;
