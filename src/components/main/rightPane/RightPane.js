import "./rightPane.css";

import { Options } from "../../common";

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
