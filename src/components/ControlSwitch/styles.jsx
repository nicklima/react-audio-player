import styled from "styled-components";

export const GridSwitch = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? "1" : "0.5")};

  svg {
    fill: ${({ theme }) => theme.text};
  }
`;

export const Switch = styled.label`
  display: inline-block;
  height: 28px;
  position: relative;
  width: 60px;
  margin: 0 5px;
`;

export const Slider = styled.label`
  background-color: ${({ $active, theme }) => ($active ? "white" : "black")};
  border-radius: 34px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: ${({ theme }) => theme.bg};
    border-radius: 50%;
    bottom: 4px;
    content: "";
    height: 20px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    transform: ${({ $active }) => ($active ? "translateX(32px)" : "initial")};
    width: 20px;
  }
`;
