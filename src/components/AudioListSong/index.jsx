import { useStore } from "store";
import { Play } from "icons";
import {
  Song,
  SongCover,
  SongThumb,
  SongInfo,
  SongArtist,
  SongName,
  SongIcon
} from "./styles";

const AudioListSong = ({ music }) => {
  const { tracks, setTrack, setIsPlaying } = useStore();

  const handlePlay = (e) => {
    setTrack(e);
    setIsPlaying();
  };

  // Destructuring Current Song Infos
  const { albumImage, artistName, musicName } = music;

  // Get Track Index on sound Arrary
  const trackIndex = tracks.findIndex((track) => track.musicName === musicName);
  return (
    <Song
      alt={`${musicName} - ${artistName}`}
      title={`${musicName} - ${artistName}`}
      onClick={() => handlePlay(trackIndex)}
    >
      <SongCover>
        <SongThumb src={albumImage} alt={`${artistName} - ${musicName}`} />
      </SongCover>
      <SongInfo>
        <SongName>{musicName}</SongName>
        <SongArtist>{artistName}</SongArtist>
      </SongInfo>
      <SongIcon>
        <Play />
      </SongIcon>
    </Song>
  );
};
export default AudioListSong;
