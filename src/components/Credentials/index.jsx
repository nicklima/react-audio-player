import { useStore } from "store";
import { Twitter, Dribbble, BuildUi, Music } from "icons";
import { Credits, Title, Link } from "./styles";

const Credentials = () => {
  const { credentialsOn } = useStore();
  return (
    <Credits $active={credentialsOn}>
      <Title>Credits</Title>
      <Link href="https://twitter.com/nicklimaJS" target="_blank">
        <Twitter />
        <span>Coded By Nick Lima</span>
      </Link>

      <Link
        href="https://dribbble.com/shots/10221294-Music-player-exploration-1-1-dark-mode/attachments/2126937?mode=media"
        target="_blank">
        <Dribbble />
        <span>Arkadiusz Stanikowski</span>
      </Link>

      <Link
        href="https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks"
        target="_blank">
        <BuildUi />
        <span>Audio Player Inspiration</span>
      </Link>

      <Link href="https://www.bensound.com" target="_blank">
        <Music />
        <span>Musics from Bensound.com</span>
      </Link>
    </Credits>
  );
};

export default Credentials;
