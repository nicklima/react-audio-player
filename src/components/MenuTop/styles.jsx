import styled from "styled-components";

export const Menu = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  z-index: 5;
`;

export const Button = styled.button`
  align-items: center;
  background: transparent;
  display: flex;
  cursor: pointer;
  flex-direction: column;

  span {
    background: ${({ theme }) => theme.text};
    border-radius: 5px;
    height: 4px;
    margin-bottom: 3px;
    transition: all 0.5s;
    width: 35px;

    &:first-child {
      transform: ${({ active }) => (active ? "rotate(50deg)" : "initial")};
    }

    &:last-child {
      transform: ${({ active }) =>
        active ? "rotate(-50deg) translate(5px, -5px)" : "initial"};
      width: ${({ active }) => (active ? "35px" : "27px")};
    }
  }
`;
