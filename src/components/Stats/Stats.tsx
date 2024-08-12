import { useState, useEffect } from 'react';

import style from './Stats.module.scss'

import { useAppDispatch} from '../../hooks/useRedux';
import { useVariableSelector } from '../../hooks/useVariableSelector';
import { increaseSeconds } from '../../redux/reducer/timer.slice';

import { speedCounting} from '../../helpers/statsCounting';

import { TStats } from '../../types/types';

export const Stats = ( {children}:TStats ) => {
  const [speed, setSpeed] = useState('0.00');
  const [accuracy, setAccuracy] = useState(0);
  const {isTimerOn, mistakes, pressingCount, seconds} = useVariableSelector()
  const dispatch = useAppDispatch();
  //Высчитываем ошибки и скорость 
  useEffect(() => {
    const correctLetters = pressingCount - mistakes;
    
    setAccuracy(mistakes);
    setSpeed(speedCounting(correctLetters, seconds));
  }, [mistakes, pressingCount, seconds]);
  //Каждую секунду падает WPM если не печатаете
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
        <p>{speed} WPM</p>
      </div>
      <div>
        <h1 className={style.statTitle}>accuracy</h1>
        <p>{accuracy} ошибок</p>
      </div>
      {children}
    </div>
  );
};
