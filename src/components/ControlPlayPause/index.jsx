import { useStore } from "store";
import { Button } from "./styles";

const ControlPlayPause = ({ transparent }) => {
  const { isPlaying, setIsPlaying } = useStore();
  const altTitle = isPlaying ? "Pause" : "Play";
  return (
    <Button
      alt={altTitle}
      title={altTitle}
      $isPlaying={isPlaying}
      onClick={() => setIsPlaying()}
      transparent={transparent}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
};

export default ControlPlayPause;
