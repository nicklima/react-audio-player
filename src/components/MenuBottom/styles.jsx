import styled from "styled-components";

export const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  z-index: ${({ active }) => (active ? "5" : "3")};
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
    width: 35px;

    &:before,
    &:after {
      background: ${({ theme }) => theme.text};
      content: "";
      height: 3px;
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
