import { useEffect, useState } from "react";
import style from "../Test/Test.module.scss";
import { useAppDispatch } from "../../hooks/useRedux";
import {
  fetchText,
  setText,
  setCurrentCharIndex,
  increasePressingCount,
  setMistakes,
} from "../../redux/reducer/text.slice";

import { setIsTimerOn } from "../../redux/reducer/timer.slice";
import { setIsTestFinished } from "../../redux/reducer/test.slice";

import { getCurrentChar, compareChars } from "../../helpers/charTransform";
import { useVariableSelector } from "../../hooks/useVariableSelector";

export const Text = () => {
  const dispatch = useAppDispatch();
  const {
    text,
    isLoading,
    error,
    currentCharIndex,
    mistakes,
    pressingCount,
    sentences,
  } = useVariableSelector();


  //Наш текст отрисовывается
  useEffect(() => {
    dispatch(fetchText(sentences));
  }, [dispatch]);

  //На какой букве находимся
  useEffect(() => {
    const newText = getCurrentChar(text, currentCharIndex);
    dispatch(setText(newText));
  }, [dispatch, currentCharIndex]);
  // что происходит при концовке текста
  useEffect(() => {
    if (pressingCount === 0 && text.length > 0) {
      dispatch(setIsTimerOn(true));
    }

    if (currentCharIndex < text.length) {
      const keyPressHandler = (event: KeyboardEvent) => {
        const [newText, newCurrentIndex, newMistakes] = compareChars(
          text,
          currentCharIndex,
          event.key,
          mistakes
        );

        dispatch(setCurrentCharIndex(newCurrentIndex));
        dispatch(setText(newText));
        dispatch(setMistakes(newMistakes));
        dispatch(increasePressingCount());

        if (newCurrentIndex === text.length) {
          dispatch(setIsTimerOn(false));
          dispatch(setIsTestFinished(true));
        }
      };

      document.addEventListener("keypress", keyPressHandler);

      return () => {
        document.removeEventListener("keypress", keyPressHandler);
      };
    }
  }, [dispatch, text]);

  return (
    <div className={style.testTextWrapper}>
      {error && <p className={style.errorText}>{error}</p>}
      {isLoading ? (
        <p className={style.testLoadingText}>Loading text...</p>
      ) : (
        <div>
          {text.map((item, index) => {
            return (
              <span className={item.class} key={index}>
                {item.char}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
