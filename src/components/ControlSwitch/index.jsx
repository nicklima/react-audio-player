import { useStore } from "store";
import { Sun, Moon } from "icons";

import { GridSwitch, Switch, Slider, Button } from "./styles";

const ControlSwitch = () => {
  const { setTheme, theme } = useStore();

  const handleTheme = () => {
    if (theme.name === "dark") setTheme("light");
    if (theme.name === "light") setTheme("dark");
  };

  return (
    <GridSwitch>
      <Button onClick={() => handleTheme()} active={theme.name === "light"}>
        <Sun />
      </Button>
      <Switch onClick={() => handleTheme()}>
        <Slider active={theme.name === "dark"} />
      </Switch>
      <Button onClick={() => handleTheme()} active={theme.name === "dark"}>
        <Moon />
      </Button>
    </GridSwitch>
  );
};

export default ControlSwitch;
