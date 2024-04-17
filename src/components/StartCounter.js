import React from "react";
import "../style2.css";

const StartCounter = ({
  handleReset,
  handlePause,
  handleResume,
  hours,
  minutes,
  seconds,
  isPaused,
}) => {
  return (
    <>
      <div className="counter-input">
        <div className="timer2">
          <div>{hours < 10 ? `0${hours}` : hours}</div>
          <span>:</span>
          <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
          <span>:</span>
          <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
        <div>
          {!isPaused && (
            <button className="start" onClick={handlePause}>
              Pause
            </button>
          )}
          {isPaused && (
            <button className="start" onClick={handleResume}>
              Resume
            </button>
          )}
          <button className="start" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StartCounter;
