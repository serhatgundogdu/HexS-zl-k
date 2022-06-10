import React from "react";
import getContrastYIQ from "../Helpers/getContrastYIQ";
import isHex from "../Helpers/isHex";
import Clipboard from "react-clipboard.js";

const Word = ({ word, setAlert }) => {
  return (
    <Clipboard data-clipboard-text={word[1]} onSuccess={() => setAlert(true)}>
      <div
        className="flex items-center justify-between w-full h-full px-2 py-2 transition-all bg-white border border-black rounded-md border-opacity-20 hover:scale-105"
        style={{ background: isHex(word[1]) }}
      >
        <div
          className="text-left"
          style={{ color: getContrastYIQ(isHex(word[1]).substring(1)) }}
        >
          <h3 className="font-semibold">{word[0]}</h3>
          <span className="text-lg font-light">{word[1]}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill={getContrastYIQ(isHex(word[1]).substring(1))}
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
        </svg>
      </div>
    </Clipboard>
  );
};

export default Word;
