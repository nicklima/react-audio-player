import { useStore } from "store";
import {
  AlbumCover,
  AlbumFigure,
  ChartSVG,
  ChartSVGLoader,
  ChartSVGLine,
  ChartSVGCircle
} from "./styles";

const ControlThumb = ({ small }) => {
  const { currentTrack, trackInfo } = useStore();
  const { albumImage } = currentTrack;
  const { progress, duration } = trackInfo;
  const trackBorder = duration ? Number((progress / duration) * 100) : "0";

  return (
    <>
      <AlbumCover>
        <AlbumFigure small={small} thumb={albumImage} />
        <ChartSVG small={small}>
          <ChartSVGLoader viewBox="0 0 36 36">
            <ChartSVGLine
              small={small}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            ></ChartSVGLine>
            <ChartSVGCircle
              small={small}
              strokeDasharray={`${trackBorder}, 100`}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            ></ChartSVGCircle>
          </ChartSVGLoader>
        </ChartSVG>
      </AlbumCover>
    </>
  );
};

export default ControlThumb;
