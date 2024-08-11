import { useState, useEffect } from 'react';

import style from './Stats.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { increaseSeconds } from '../../redux/reducer/timer.slice';

import { speedCounting, accuracyCounting } from '../../helpers/statsCounting';

import { TStats } from '../../types/types';
import { useVariableSelector } from '../../hooks/useVariableSelector';
export const Stats = ( {children}:TStats ) => {
  const [speed, setSpeed] = useState('0.00');
  const [accuracy, setAccuracy] = useState('0.00');
  const {isTimerOn, mistakes, pressingCount, seconds} = useVariableSelector()
  const dispatch = useAppDispatch();

  useEffect(() => {
    const correctLetters = pressingCount - mistakes;
    
    setAccuracy(accuracyCounting(mistakes, pressingCount));
    setSpeed(speedCounting(correctLetters, seconds));
  }, [mistakes, pressingCount, seconds]);

  useEffect(() => {
    if (isTimerOn) {
      const timer = setTimeout(() => {
        dispatch(increaseSeconds());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTimerOn, seconds, dispatch]);
  
  return (
    <div className={style.statsContainer}>
      <div>
        <h1 className={style.statTitle}>speed</h1>
        <p className='uppercase-text paragraph'>{speed} WPM</p>
      </div>
      <div>
        <h1 className={style.statTitle}>accuracy</h1>
        <p className='uppercase-text paragraph'>{accuracy} %</p>
      </div>
      {children}
    </div>
  );
};
