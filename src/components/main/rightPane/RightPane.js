import "./rightPane.css";
import optionsIcon from "./icons/settings_FILL0_wght200_GRAD0_opsz24.svg";
import data from "./data";

const RightPane = () => {
  return (
    <div class="main-content">
      <button class="options-button">
        <img class="options-icon" src={optionsIcon} />
      </button>
      <div class="right-pane">
        <div class="right-pane-header">Options</div>
        <div class="right-pane-content">
          {data.rightPaneOptions.map((option) => {
            return (
              <div class="right-pane-option">
                <div class="right-pane-option-text">{option}</div>
                <input type="checkbox" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightPane;
