import { useEffect, useRef } from "react";

import { useStore } from "store";
import Controls from "components/Controls";
import ControlSound from "components/ControlSound";
import ControlThumb from "components/ControlThumb";
import ControlTime from "components/ControlTime";
import { Artist, Album, Player, SongCover, SongInfo, Music } from "./styles";

const AudioPlayer = () => {
  //////////////
  //Get Globals States/Functions from Store
  //////////////

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
    shuffle
  } = useStore();

  // Destructuring Current Song Infos
  const { musicName, artistName, albumName, musicSrc } = currentTrack;

  //////////////
  // Refs
  //////////////

  const audioRef = useRef(new Audio(musicSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  //////////////
  // Handle Functions
  //////////////

  // Get Current Track Index
  const trackIndex = tracks.findIndex((track) => track.musicName === musicName);

  // Function to handle Next Song when Shuffle is true
  const shuffleSongs = () => {
    // Copy List Array removing the current track
    let list = tracks.filter((track) => track.musicName !== musicName);

    // Sort Other Songs
    list.sort(() => Math.random() - 0.5);
    //Put Current Song Back inside song array at first position
    list.splice(0, 0, currentTrack);

    // If Shuffle is true, set TrackList state
    // with shuflled song array or set orignal sound list if false
    if (shuffle) {
      setTracks(list);
    } else {
      setTracks();
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        if (repeat) {
          audioRef.currentTime = 0;
          audioRef.current.play();
        } else {
          if (trackIndex < tracks.length - 1) {
            setTrack(trackIndex + 1);
          } else {
            setTrack(0);
          }
          setIsPlaying();
        }
      } else {
        setTrackInfo({
          duration: audioRef.current.duration,
          progress: audioRef.current.currentTime
        });
      }
    }, [1000]);
  };

  //////////////
  // React Effects
  //////////////

  // Call StartTimer to handle Reapet and Shuffle Actions
  useEffect(() => {
    startTimer();
  }, [repeat]);

  // Handle Shuffle
  useEffect(() => {
    shuffleSongs();
  }, [shuffle]);

  // Change Volume on Sound State Changes
  useEffect(() => {
    audioRef.current.volume = sound;
  }, [sound]);

  // Play Pause Function
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(musicSrc);
    setTrackInfo({
      duration: audioRef.current.duration,
      progress: audioRef.current.currentTime
    });

    if (isReady.current) {
      audioRef.current.play();
      audioRef.current.volume = sound;
      setIsPlaying();
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [currentTrack]);

  // Pause and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default AudioPlayer;
