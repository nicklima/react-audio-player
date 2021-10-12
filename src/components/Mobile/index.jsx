import MenuTop from "components/MenuTop";
import Credentials from "components/Credentials";
import AudioPlayer from "components/AudioPlayer";
import AudioList from "components/AudioList";
import ControlSettings from "components/ControlSettings";
import Settings from "components/Settings";
import MenuBottom from "components/MenuBottom";
import { Wrapper } from "./styles";

const Mobile = () => {
  return (
    <>
      <Wrapper>
        <MenuTop />
        <Settings />
        <Credentials />
        <AudioPlayer />
        <AudioList />
        <ControlSettings />
        <MenuBottom />
      </Wrapper>
    </>
  );
};

export default Mobile;
