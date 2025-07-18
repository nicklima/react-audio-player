import { create } from "zustand";

import { theme as colors } from "styles/theme";
import TrackList from "data/tracks.json";

export const useStore = create((set) => ({
  // Play States
  isPlaying: false,
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  // Tracks States and Functions
  tracks: TrackList,
  setTracks: (e) => set(() => ({ tracks: e || TrackList })),
  currentTrack: TrackList[0],
  setTrack: (e) => set((state) => ({ currentTrack: state.tracks[e] })),
  trackInfo: {
    progress: 0,
    duration: 0,
  },
  setTrackInfo: (e) => set(() => ({ trackInfo: e })),
  //Theme State
  theme: {
    name: "dark",
    colors: colors.dark,
  },
  setTheme: (e) =>
    set(() => ({
      theme: {
        name: e,
        colors: colors[e],
      },
    })),
  //Sound Volume States
  sound: 0.5,
  soundVolumes: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  setSound: (e) => set(() => ({ sound: e })),
  // Control States
  shuffle: false,
  setShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
  repeat: false,
  setRepeat: () => set((state) => ({ repeat: !state.repeat })),
  // Music List
  showList: false,
  setShowList: () => set((state) => ({ showList: !state.showList })),
  // Settings
  settingsOn: false,
  setSettingsOn: () => set((state) => ({ settingsOn: !state.settingsOn })),
  // Credential States
  credentialsOn: false,
  setCredentialsOn: () =>
    set((state) => ({ credentialsOn: !state.credentialsOn })),
}));
