import { useStore } from "store";

import { Arrow } from "icons";
import { Button } from "./styles";

const ControlArrow = ({ title, reverse }) => {
  const { tracks, currentTrack, setTrack, setIsPlaying } = useStore();
  const { musicName } = currentTrack;
  const trackIndex = tracks.findIndex((track) => track.musicName === musicName);

  const handleClick = () => {
    if (reverse) {
      if (trackIndex - 1 < 0) {
        setTrack(tracks.length - 1);
      } else {
        setTrack(trackIndex - 1);
      }
    } else {
      if (trackIndex < tracks.length - 1) {
        setTrack(trackIndex + 1);
      } else {
        setTrack(0);
      }
    }

    setIsPlaying();
  };

  return (
    <Button
      $reverse={reverse}
      alt={title}
      title={title}
      onClick={() => handleClick()}>
      <Arrow />
    </Button>
  );
};

export default ControlArrow;
