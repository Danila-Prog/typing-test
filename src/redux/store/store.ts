import { configureStore } from '@reduxjs/toolkit';

import testReducer from '../reducer/test.slice';
import textReducer from '../reducer/text.slice';
import timerReducer from '../reducer/timer.slice';

export const store = configureStore({
  reducer: {
    testSlice: testReducer,
    textSlice: textReducer,
    timerSlice: timerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
