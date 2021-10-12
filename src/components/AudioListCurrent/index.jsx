import { useStore } from "store";
import ControlThumb from "components/ControlThumb";
import ControlEars from "components/ControlEars";

import {
  Current,
  CurrentFigure,
  CurrentSong,
  CurrentArtist,
  CurrentName,
  CurrentIcon
} from "./styles";

const AudioListCurrent = () => {
  const { setShowList, currentTrack } = useStore();
  const { musicName, artistName } = currentTrack;

  return (
    <Current onClick={() => setShowList()}>
      <CurrentFigure>
        <ControlThumb small />
      </CurrentFigure>
      <CurrentSong>
        <CurrentName>{musicName}</CurrentName>
        <CurrentArtist>{artistName}</CurrentArtist>
      </CurrentSong>
      <CurrentIcon>
        <ControlEars />
      </CurrentIcon>
    </Current>
  );
};

export default AudioListCurrent;
