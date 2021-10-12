import styled from "styled-components";

export const AlbumCover = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const sizes = (small, sizeSmall, sizeLarge) =>
  small ? `${sizeSmall}px` : `${sizeLarge}px`;

export const AlbumFigure = styled.div`
  background-color: ${({ theme }) => theme.text};
  background-image: url(${({ thumb }) => thumb || "default.png"});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: ${({ small, theme }) =>
    small
      ? `0px 0px 5px 1px ${theme.shadow}`
      : `0px 0px 15px 5px ${theme.shadow}`};
  height: ${({ small }) => sizes(small, "50", "160")};
  overflow: hidden;
  width: ${({ small }) => sizes(small, "50", "160")};
`;

export const ChartSVG = styled.div`
  height: ${({ small }) => sizes(small, "70", "200")};
  margin-bottom: ${({ small }) => (small ? "0" : "2px")};
  position: absolute;
  width: ${({ small }) => sizes(small, "70", "200")};
`;

export const ChartSVGLoader = styled.svg``;

export const ChartSVGLine = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.chartLine};
  stroke-width: ${({ small }) => (small ? 0.8 : 0.6)};
`;

export const ChartSVGCircle = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.chartCircle};
  stroke-width: ${({ small }) => (small ? 0.8 : 0.6)};
  stroke-linecap: round;
  animation: progress 0.2s ease-out forwards;

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`;
