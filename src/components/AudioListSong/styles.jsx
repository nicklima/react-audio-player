import styled from "styled-components";

export const Song = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 60px 1fr 30px;
  align-items: center;
  grid-gap: 5px;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 12px;

  &:hover svg {
    opacity: 1;
  }
`;

export const SongCover = styled.figure`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  overflow: hidden;
  box-shadow: 0px 0px 8px 1px ${({ theme }) => theme.shadow};
  margin: 5px;
`;

export const SongThumb = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const SongInfo = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
`;

export const SongName = styled.h3`
  font-weight: bold;
  font-size: 16px;
`;

export const SongArtist = styled.p`
  font-size: 13px;
`;

export const SongIcon = styled.button`
  background: transparent;
  cursor: pointer;
  margin-right: 5px;

  svg {
    fill: ${({ theme }) => theme.text};
    opacity: 0.6;
    transition: all 0.5s;
    stroke: 2;
  }
`;
