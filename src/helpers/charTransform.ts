import style from "../components/Test/Test.module.scss";
import {
  GetCurrentCharType,
  CompareCharsType,
  restoreTTextType,
} from "../types/types";

export const getCurrentChar: GetCurrentCharType = (
  charsArray,
  currentIndex
) => {
  return charsArray.map((item, index) => {
    if (index === currentIndex) {
      return {
        ...item,
        class: `${style.currentChar}`,
      };
    }

    return item;
  });
};

export const compareChars: CompareCharsType = (
  charsArray,
  currentIndex,
  pressedKey,
  mistakes
) => {
  let newCurrentIndex = currentIndex;
  let newMistakes = mistakes;

  const resultArr = charsArray.map((item, index) => {
    if (index === currentIndex && item.char === pressedKey) {
      newCurrentIndex += 1;
      return {
        ...item,
        class: `${style.rightChar}`,
      };
    } else if (index === currentIndex && item.char !== pressedKey) {
      newMistakes += 1;
      return {
        ...item,
        class: `${style.wrongChar}`,
      };
    }

    return item;
  });

  return [resultArr, newCurrentIndex, newMistakes];
};

export const restoreText: restoreTTextType = (charsArray) => {
  return charsArray.map((item, index) => {
    if (index === 0) {
      return {
        ...item,
        class: `${style.currentChar}`,
      };
    }

    return {
      ...item,
      class: "",
    };
  });
};
