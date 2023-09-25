import "./options.css";

const Options = ({ options, setOptions }) => {
  if (!options) {
    return (
      <>
        <div class="right-pane-header">Options</div>
        <p>No options defined</p>
      </>
    );
  }

  return (
    <>
      <div class="right-pane-header">Options</div>
      <div class="right-pane-content">
        {Object.entries(options).map(([key, value]) => {
          return (
            <div class="right-pane-option">
              <div class="right-pane-option-text">{value.name}</div>
              <input
                type="checkbox"
                checked={value.enabled}
                defaultValue={value.enabled}
                onClick={() =>
                  setOptions((prevOptions) => {
                    return {
                      ...prevOptions,
                      ...{
                        [key]: { name: value.name, enabled: !value.enabled },
                      },
                    };
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Options;
