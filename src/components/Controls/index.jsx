import ControlArrow from "components/ControlArrow";
import ControlPlayPause from "components/ControlPlayPause";

import { Controlers } from "./styles";

const Controls = ({ transparent }) => (
  <Controlers>
    <ControlArrow reverse={true} title="Previous Song" />
    <ControlPlayPause transparent={transparent} />
    <ControlArrow title="Next Song" />
  </Controlers>
);

export default Controls;
