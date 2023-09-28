const Answer = ({ handleInputChange, handleSubmit }) => {
  return (
    <div class="answer-container">
      <div class="answer-bar">
        <input
          type="text"
          class="answer-input-1"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Give it a go!"
          onInput={handleInputChange}
          onKeyDown={handleSubmit}
        ></input>
        <button class="answer-button">GO</button>
      </div>
    </div>
  );
};

export default Answer;
