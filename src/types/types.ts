import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from 'react';


export type TTextType = {
  char: string;
  class: string;
};

export type TTextState = {
  text: TTextType[];
  isLoading: boolean;
  error: string | null | undefined;
  currentCharIndex: number;
  mistakes: number;
  pressingCount: number;
};

export type TTestSliceState = {
  isTestStarted: boolean;
  isTestFinished: boolean;
  sentences: string;
}
export type TTimerSliceState = {
  isTimerOn: boolean;
  seconds: number;
}

export type TModal = {
  children: ReactNode;
  title: string;
};

export interface ISelect extends ComponentPropsWithoutRef<'select'> {
  defaultValue: string;
  options: {
    value: string,
    name: string
  }[];
}
export type TStats = {
  children?: ReactNode;
};

export type GetCurrentCharType = (
  charsArray: TTextType[], 
  currentIndex: number
) => TTextType[];

export type CompareCharsType = (
  charsArray: TTextType[], 
  currentIndex: number,
  pressedKey: string,
  mistakes: number,
) => [
  resultArr: TTextType[],
  currentIndex: number,
  mistakes: number
];
export type restoreTTextType = (
  charsArray: TTextType[], 
) => TTextType[];

