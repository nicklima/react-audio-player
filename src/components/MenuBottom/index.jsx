import { useStore } from "store";
import { Button, Menu } from "./styles";

const MenuBottom = () => {
  const { settingsOn, setSettingsOn } = useStore();
  return (
    <Menu $active={settingsOn}>
      <Button $active={settingsOn} onClick={() => setSettingsOn()}>
        <span></span>
        <span></span>
        <span></span>
      </Button>
    </Menu>
  );
};

export default MenuBottom;
