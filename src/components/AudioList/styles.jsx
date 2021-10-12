import styled from "styled-components";

export const SongList = styled.div`
  background: ${({ theme }) => theme.mobile};
  height: 100%;
  overflow: hidden;
  padding: 20px;
  position: absolute;
  transform: translateY(${({ show }) => (show ? "0" : "200%")});
  transition: all 0.5s;
  width: 100%;
  z-index: 5;
`;

export const ListScroll = styled.ul`
  overflow-y: scroll;
  max-height: 55%;
  margin: 10px 0 25px;
  position: relative;
  padding-right: 15%;
  width: 115%;
`;

export const Mask = styled.div`
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.mobile} 0%,
    rgba(0, 212, 255, 0) 100%
  );
  height: 50px;
  width: 100%;
  margin: ${({ inverse }) => (inverse ? "10px 0 -60px" : "-70px 0 10px")};
  position: relative;
  pointer-events: none;
  transform: ${({ inverse }) => (inverse ? "rotate(180deg)" : "initial")};
  z-index: 5;
`;
