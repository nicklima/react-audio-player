import { useStore } from "store";
import ControlEars from "components/ControlEars";
import { Shuffle, Repeat } from "icons";
import { GridSettings, Button, CloseButton } from "./styles";

const ControlSettings = ({ opened }) => {
  const { setShowList, setRepeat, repeat, setShuffle, shuffle } = useStore();
  const altCloseOpen = opened ? "Close List" : "Song List";

  return (
    <GridSettings>
      <Button
        alt="Shuffle Songs"
        title="Shuffle Songs"
        $active={shuffle}
        onClick={() => setShuffle()}>
        <Shuffle />
      </Button>
      <Button
        alt={altCloseOpen}
        title={altCloseOpen}
        onClick={() => setShowList()}>
        {opened ? <CloseButton /> : <ControlEars />}
      </Button>
      <Button
        alt="Repeat Song"
        title="Repeat Song"
        $active={repeat}
        onClick={() => setRepeat()}>
        <Repeat />
      </Button>
    </GridSettings>
  );
};

export default ControlSettings;
