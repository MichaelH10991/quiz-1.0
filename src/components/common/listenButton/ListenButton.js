import React, { useState, useRef } from "react";
import "./listenButton.css";
import speakerIcon from "../../icons/volume_up_FILL0_wght400_GRAD0_opsz24.svg";

/**
 * TODO: A lot of this can be abstracted out into config, when I have the time...
 */
const languageMap = {
  croatian: "hr",
  german: "de",
  french: "fr",
  spanish: "es",
};

const createUrl = (phrase, language) =>
  `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
    phrase
  )}&tl=${languageMap[language.toLowerCase()]}&client=tw-ob`;

const audioSync = (url) => {
  return new Promise((done) => {
    const audio = new Audio(url);
    done(audio);
  });
};

const ListenButton = ({ phrase, language }) => {
  const [fetched, setFetched] = useState(1);
  const [audio, setAudio] = useState();
  const previousValues = useRef({ phrase, fetched });

  return (
    <div>
      <button
        className="listen-button"
        onClick={async () => {
          setFetched(fetched + 1);
          if (
            previousValues.current.phrase !== phrase &&
            previousValues.current.fetched !== fetched
          ) {
            const audio = await audioSync(createUrl(phrase, language));
            audio.play();
            setAudio(audio);
            previousValues.current = { phrase, fetched };
          } else {
            if (fetched === 1) {
              const audio = await audioSync(createUrl(phrase, language));
              setAudio(audio);
              audio.play();
            } else {
              audio.play();
            }
          }
        }}
      >
        <img class="listen-icon" alt="listen" src={speakerIcon}></img>
      </button>
    </div>
  );
};

export default ListenButton;
