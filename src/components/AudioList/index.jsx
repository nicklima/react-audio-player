import { useStore } from "store";
import AudioListCurrent from "components/AudioListCurrent";
import Controls from "components/Controls";
import ControlSound from "components/ControlSound";
import ControlSettings from "components/ControlSettings";
import AudioListSong from "components/AudioListSong";

import { SongList, ListScroll, Mask } from "./styles";

const AudioList = () => {
  const { showList, tracks, currentTrack } = useStore();

  return (
    <SongList $show={!!showList}>
      <AudioListCurrent />
      <Mask $inverse={true} />
      <ListScroll>
        {tracks
          .filter((track) => track.musicName !== currentTrack.musicName)
          .map((music, idx) => {
            return <AudioListSong music={music} key={idx} />;
          })}
      </ListScroll>
      <Mask />
      <Controls $transparent={true} />
      <ControlSound />
      <ControlSettings opened />
    </SongList>
  );
};

export default AudioList;
