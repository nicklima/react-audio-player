import styled from "styled-components";

export const Current = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.chartCircle};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 60px 1fr 30px;
  padding-bottom: 20px;
  justify-content: space-between;
`;

export const CurrentFigure = styled.div``;
export const CurrentSong = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CurrentName = styled.h3`
  font-weight: bold;
  font-size: 16px;
`;

export const CurrentArtist = styled.p`
  font-size: 13px;
`;

export const CurrentIcon = styled.button`
  background: transparent;
  cursor: pointer;
  margin-right: 5px;

  svg {
    fill: ${({ theme }) => theme.text};
    opacity: 0.6;
    transition: all 0.5s;
  }
`;
