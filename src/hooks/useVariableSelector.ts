import { useAppSelector } from "./useRedux";
//Все варианты useSelector
export const useVariableSelector = () => {
  const mistakes = useAppSelector((state) => state.textSlice.mistakes);
  const pressingCount = useAppSelector((state) => state.textSlice.pressingCount);
  const seconds = useAppSelector((state) => state.timerSlice.seconds);
  const isTimerOn = useAppSelector((state) => state.timerSlice.isTimerOn);
  const isTestFinished = useAppSelector(state => state.testSlice.isTestFinished);
  const text = useAppSelector(state => state.textSlice.text);
  const isLoading = useAppSelector(state => state.textSlice.isLoading);
  const error = useAppSelector(state => state.textSlice.error);
  const currentCharIndex = useAppSelector(state => state.textSlice.currentCharIndex);
  const sentences = useAppSelector(state => state.testSlice.sentences);
  const isTestStarted = useAppSelector(state => state.testSlice.isTestStarted);

  return {mistakes, pressingCount, seconds, isTimerOn,isTestStarted, isTestFinished, text, isLoading, error, currentCharIndex, sentences};
};
