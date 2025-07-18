import { useStore } from "store";
import { Button, Menu } from "./styles";

const MenuTop = () => {
  const { credentialsOn, setCredentialsOn } = useStore();

  return (
    <>
      <Menu>
        <Button $active={credentialsOn} onClick={() => setCredentialsOn()}>
          <span></span>
          <span></span>
        </Button>
      </Menu>
    </>
  );
};

export default MenuTop;
