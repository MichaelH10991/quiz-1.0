import "./header.css";
import generalData from "../generalData";
import optionsIconBlack from "./icons/settings_black_24dp.svg";
import account from "./icons/account_circle_FILL0_wght400_GRAD0_opsz24.svg";

import { Options } from "../common/";

import { useState } from "react";

const Header = ({ options, setOptions }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  return (
    <header className="header">
      <div class="header-left">
        <div class="logo">
          <p class="logo-text">{generalData.appName}</p>
        </div>
        <button class="games-button">Games</button>
        {generalData.gameModes.map((gameMode) => {
          return <div class="header-gamemodes-containers">{gameMode}</div>;
        })}
      </div>
      <div class="header-right">
        <button
          class="options-button"
          onClick={() => setOptionsOpen(!optionsOpen)}
        >
          <img class="options-icon" src={optionsIconBlack} />
        </button>
        <button class="profile-button">
          <img class="profile-icon" src={account} />
        </button>
      </div>
      {optionsOpen && (
        <div class="options-dialog">
          <Options options={options} setOptions={setOptions} />
        </div>
      )}
    </header>
  );
};

export default Header;
