import "./header.css";
import generalData from "../generalData";
import data from "./data";

const Header = () => {
  return (
    <header className="header">
      <div class="header-left">
        <div>{generalData.appName}</div>
      </div>
      <div class="header-right">
        {data.gameModes.map((gameMode) => {
          return <div class="header-gamemodes-containers">{gameMode}</div>;
        })}
      </div>
    </header>
  );
};

export default Header;
