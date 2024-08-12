import style from './Test.module.scss'

import { useAppDispatch} from '../../hooks/useRedux';
import { resetSeconds } from '../../redux/reducer/timer.slice';
import { setIsTestFinished, resetTestState } from '../../redux/reducer/test.slice';
import { resetTextState, setText } from '../../redux/reducer/text.slice';

import { restoreText } from '../../helpers/charTransform';

import {Text} from '../Text/Text';
import { Stats } from '../Stats/Stats';
import {ModalWindow} from '../Modal/Modal';
import { useVariableSelector } from '../../hooks/useVariableSelector';

export const Test = () => {
  const dispatch = useAppDispatch();
  const {isTestFinished, text} = useVariableSelector()

  // Перезагрузить тест
  const restart = () => {
    dispatch(resetSeconds());
    dispatch(resetTextState());
    dispatch(setText(restoreText(text)));

    if (isTestFinished) {
      dispatch(setIsTestFinished(false));
    }
  }
  //Сделать новый тест
  const newTest = () => {
    dispatch(resetTestState()); 
    dispatch(resetTextState());
    dispatch(resetSeconds());
  }

  return (
    <section className={style.testContainer}>
      <Text />
      <Stats>
        <button onClick={restart} className={style.statsButton}>Restart</button>
      </Stats>
      {
        isTestFinished && 
          <ModalWindow title='Test completed!'>
            <Stats />
            <button onClick={restart}>Restart</button>
            <button onClick={newTest}>New Test</button>
          </ModalWindow>
      }
    </section>
  );
};
