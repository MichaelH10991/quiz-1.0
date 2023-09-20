import "./header.css";
import generalData from "../generalData";
import data from "./data";
import optionsIconBlack from "./icons/settings_black_24dp.svg";

const Header = () => {
  return (
    <header className="header">
      <div class="header-left">
        <div>{generalData.appName}</div>
        <button class="games-button">Games</button>
        {data.gameModes.map((gameMode) => {
          return <div class="header-gamemodes-containers">{gameMode}</div>;
        })}
      </div>
      <div class="header-right">
        {/* <div>dasdsa</div> */}
        <button class="options-button">
          <img class="options-icon" src={optionsIconBlack} />
        </button>
      </div>
    </header>
  );
};

export default Header;
