import { useStore } from "store";
import { SongTime, Time } from "./styles";

const ControlTime = () => {
  const { trackInfo } = useStore();
  const { progress, duration } = trackInfo;

  // Convert Sound Time in Minutes/Seconds
  const timeConverter = (time) => {
    let minutes = Math.floor(time / 60);
    let secs = Math.floor(time % 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (isNaN(minutes)) {
      minutes = "00";
    }

    if (isNaN(secs)) {
      secs = "0";
    }

    if (secs < 10) {
      secs = "0" + secs;
    }

    return minutes + ":" + secs;
  };

  // Calculate Left Sound Time
  const timeNegative = (total, current) => {
    const timeCalc = total - current;
    const timeLeft = timeConverter(timeCalc);

    if (timeLeft === "00:00") return timeLeft;
    return `-${timeLeft}`;
  };

  // Setting Times values into consts
  const totalTime = timeConverter(duration);
  const playTime = timeNegative(duration, progress);

  return (
    <SongTime>
      <Time>{totalTime}</Time>
      <Time $current={true}>{playTime}</Time>
    </SongTime>
  );
};

export default ControlTime;
