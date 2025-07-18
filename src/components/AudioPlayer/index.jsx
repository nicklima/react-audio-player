import { useEffect, useRef } from "react";
import { useStore } from "store";
import Controls from "components/Controls";
import ControlSound from "components/ControlSound";
import ControlThumb from "components/ControlThumb";
import ControlTime from "components/ControlTime";
import { Artist, Album, Player, SongCover, SongInfo, Music } from "./styles";

const AudioPlayer = () => {
  const {
    sound,
    isPlaying,
    setIsPlaying,
    tracks,
    setTracks,
    currentTrack,
    setTrack,
    setTrackInfo,
    repeat,
    shuffle,
  } = useStore();

  const { musicName, artistName, albumName, musicSrc } = currentTrack;

  const audioRef = useRef(new Audio(musicSrc));
  const intervalRef = useRef(null);
  const isReady = useRef(false);

  const trackIndex = tracks.findIndex((track) => track.musicName === musicName);

  const shuffleSongs = () => {
    const list = tracks.filter((track) => track.musicName !== musicName);
    list.sort(() => Math.random() - 0.5);
    list.unshift(currentTrack);
    shuffle ? setTracks(list) : setTracks();
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const audio = audioRef.current;

      if (audio.ended) {
        if (repeat) {
          audio.currentTime = 0;
          audio.play().catch((err) => console.warn("Repeat play failed:", err));
        } else {
          const nextIndex = trackIndex < tracks.length - 1 ? trackIndex + 1 : 0;
          setTrack(nextIndex);
          setIsPlaying(false); // Will be triggered again if isReady
        }
      } else {
        setTrackInfo({
          duration: audio.duration,
          progress: audio.currentTime,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, [repeat]);

  useEffect(() => {
    shuffleSongs();
  }, [shuffle]);

  useEffect(() => {
    audioRef.current.volume = sound;
  }, [sound]);

  // 🚫 Prevent play() on mount unless triggered by interaction
  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => startTimer())
          .catch((err) => console.warn("Play blocked by browser:", err));
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(musicSrc);
    audioRef.current.volume = sound;

    setTrackInfo({
      duration: audioRef.current.duration || 0,
      progress: audioRef.current.currentTime || 0,
    });

    if (isReady.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            startTimer();
          })
          .catch((err) => console.warn("Track change play failed:", err));
      }
    } else {
      isReady.current = true;
    }
  }, [currentTrack]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Player>
      <Music>{musicName}</Music>
      <SongInfo>
        <SongCover>
          <Controls />
          <ControlThumb />
        </SongCover>
        <ControlTime />
      </SongInfo>
      <Artist>{artistName}</Artist>
      <Album>{albumName}</Album>
      <ControlSound audio={audioRef} />
    </Player>
  );
};

export default AudioPlayer;
