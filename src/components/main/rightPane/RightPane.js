import "./rightPane.css";
import optionsIcon from "./icons/settings_FILL0_wght200_GRAD0_opsz24.svg";
import optionsIconBlack from "./icons/settings_black_24dp.svg";
import data from "./data";

import Options from "../../common/Options";

const RightPane = ({ options, setOptions }) => {
  return (
    <>
      <div class="right-pane">
        <Options options={options} setOptions={setOptions} />
      </div>
    </>
  );
};

export default RightPane;
