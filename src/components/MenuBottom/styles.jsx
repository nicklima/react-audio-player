import styled from "styled-components";

export const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  z-index: ${({ $active }) => ($active ? "5" : "3")};
`;

export const Button = styled.button`
  align-items: center;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 6px;
    position: relative;
    transition: all 0.5s;
    width: 35px;

    &:nth-child(1) {
      transform: ${({ $active }) => ($active ? "rotate(45deg)" : "initial")};
    }

    &:nth-child(2) {
      display: ${({ $active }) => ($active ? "none" : "initial")};
    }

    &:nth-child(3) {
      transform: ${({ $active }) =>
        $active ? "rotate(-45deg) translate(1px, -5px)" : "initial"};
    }

    &:nth-child(1),
    &:nth-child(3) {
      &:before {
        opacity: ${({ $active }) => ($active ? "0" : "1")};
      }
    }

    &:before,
    &:after {
      background: ${({ theme }) => theme.text};
      content: "";
      height: 3.5px;
      position: absolute;
      transition: all 0.5s;
    }

    &:before {
      border-radius: 50%;
      left: 0;
      width: 3px;
    }

    &:after {
      border-radius: 10px;
      width: 30px;
      left: 6px;
      width: 70%;
    }
  }
`;
