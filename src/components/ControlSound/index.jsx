import { useStore } from "store";
import { NoSound, Sound } from "icons";
import { SoundBar, SoundButton, SoundVolume } from "./styles";

const ControlSound = () => {
  const { sound, soundVolumes, setSound } = useStore();

  const inputVolume = soundVolumes.indexOf(sound);
  const inputMaxVolume = soundVolumes.length - 1;

  // Handle Click on Volume Bar or Button
  const handleSound = (e) => {
    setSound(soundVolumes[e]);
  };

  return (
    <SoundBar>
      <SoundButton onClick={() => handleSound(0)}>
        <NoSound color="#fff" />
      </SoundButton>
      <SoundVolume
        type="range"
        step="1"
        value={inputVolume}
        min="0"
        max={inputMaxVolume}
        onChange={(e) => handleSound(e.target.value)}
      />
      <SoundButton onClick={() => handleSound(10)}>
        <Sound color="#fff" />
      </SoundButton>
    </SoundBar>
  );
};

export default ControlSound;
