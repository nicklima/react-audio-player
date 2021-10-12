import styled from "styled-components";

export const Player = styled.div`
  height: 100%;
  color: white;
  padding: 50px 15px 0;
  width: 100%;
`;

export const SongCover = styled.div`
  height: 220px;
  position: relative;
  width: 100%;

  > div {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    &:first-child {
      z-index: 2;
    }
  }
`;

export const SongInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0 10px;
  text-align: center;
`;

export const Music = styled.h1`
  color: ${({ theme }) => theme.text};
  /* transition: all 0.2s; */
  font-size: 25px;
`;

export const Artist = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Album = styled.h4`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  margin-bottom: 50px;
  opacity: 0.5;
`;
