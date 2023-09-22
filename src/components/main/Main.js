import "./main.css";
import RightPane from "./rightPane/RightPane";

const Main = ({ options, setOptions }) => {
  return (
    <div class="main-grid">
      <div class="main-content">
        <div class="question">
          This is a really long question to test word wrapping
        </div>
        <div class="answer-container">
          <div class="answer-bar">
            <input
              type="text"
              class="answer-input-1"
              placeholder="Give it a go!"
            ></input>
            <button class="answer-button">GO</button>
          </div>
        </div>
      </div>
      <RightPane options={options} setOptions={setOptions} />
    </div>
  );
};

export default Main;
