import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background: ${({ transparent, theme }) =>
    transparent ? "transparent" : theme.bg};
  border-radius: 50%;
  display: flex;
  height: 65px;
  justify-content: center;
  position: relative;
  transition: all 0.5s;
  width: 65px;

  span {
    background: ${({ theme }) => theme.text};
    height: 25px;
    transition: all 0.5s;

    &:nth-child(1) {
      border-radius: 0 3px 3px 0;
      width: ${({ isPlaying }) => (isPlaying ? "8px" : "5px")};
    }

    &:nth-child(1),
    &:nth-child(2) {
      visibility: ${({ isPlaying }) => (isPlaying ? "visible" : "hidden")};
      opacity: ${({ isPlaying }) => (isPlaying ? "1" : "0")};
      width: 8px;
    }

    &:nth-child(2) {
      border-radius: 3px 0 0 3px;
      margin-left: 5px;
    }

    &:nth-child(3) {
      border-radius: 3px;
      left: 22px;
      position: absolute;
      width: 7px;
    }

    &:nth-child(4),
    &:nth-child(5) {
      border-radius: 3px;
      position: absolute;
      opacity: ${({ isPlaying }) => (isPlaying ? "0" : "1")};
      visibility: ${({ isPlaying }) => (isPlaying ? "hidden" : "visible")};
      width: 5px;
    }

    &:nth-child(4) {
      left: ${({ isPlaying }) => (isPlaying ? "20px" : "32px")};
      transform: ${({ isPlaying }) =>
        isPlaying ? "initial" : "rotate(-115deg) translate(-6px, 0px)"};
    }

    &:nth-child(5) {
      left: ${({ isPlaying }) => (isPlaying ? "20px" : "43px")};
      transform: ${({ isPlaying }) =>
        isPlaying ? "initial" : "rotate(119deg) translate(0px, 10px)"};
    }
  }
`;
