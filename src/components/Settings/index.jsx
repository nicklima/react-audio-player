import { useStore } from "store";
import ControlSwitch from "components/ControlSwitch";

import { SettingsPanel, Title } from "./styles";

const Settings = () => {
  const { settingsOn } = useStore();
  return (
    <SettingsPanel active={settingsOn}>
      <Title>Settings</Title>
      <ControlSwitch />
    </SettingsPanel>
  );
};

export default Settings;
