import React, { useState, useEffect } from "react";
import "../styles.css";
import StartCounter from "./StartCounter.js";

const Counter = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    setIsStart(true);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsStart(false);
  };

  const handleResume = () => {
    setIsPaused(false);
    runCounter(seconds, minutes, hours);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleInput = (e) => {
    // const value = (e.target.id, e.target.value);
    const id = e.target.id;
    const val = parseInt(e.target.value);
    if (id === "hours") {
      setHours(val);
    }
    if (id === "minutes") {
      setMinutes(val);
    }
    if (id === "seconds") {
      setSeconds(val);
    }
    console.log(hours, minutes, seconds);
  };

  const runCounter = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (sec === 0 && min === 0 && hr === 0) {
      // resetTimer();
      handleReset();
      alert("Timer is finished");
      clearInterval(startTimer);
      return;
    }
  };

  useEffect(() => {
    let startTimer;
    if (isStart) {
      startTimer = setInterval(() => {
        runCounter(seconds, minutes, minutes);
      }, 1000);
      setTimerId(startTimer);
    }

    return () => {
      clearInterval(startTimer);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <>
      {!isStart && (
        <div className="counter-input">
          <div>
            <input
              type="text"
              onChange={handleInput}
              id="hours"
              placeholder="Hours"
            />
            <input
              type="text"
              onChange={handleInput}
              id="minutes"
              placeholder="Minutes"
            />
            <input
              type="text"
              onChange={handleInput}
              id="seconds"
              placeholder="Seconds"
            />
          </div>
          <div>
            <button className="start" onClick={handleStart}>
              Start
            </button>
          </div>
        </div>
      )}
      {isStart && (
        <StartCounter
          handleReset={handleReset}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isPaused={isPaused}
          handlePause={handlePause}
          handleResume={handleResume}
        />
      )}
    </>
  );
};

export default Counter;
