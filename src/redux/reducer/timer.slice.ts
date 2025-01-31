import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTimerSliceState } from '../../types/types';

const initialState: TTimerSliceState = {
  isTimerOn: false,
  seconds: 0,
};

const timerSlice = createSlice({
  name: 'timerSlice',
  initialState,
  reducers: {
    setIsTimerOn(state, action: PayloadAction<boolean>) {
      state.isTimerOn = action.payload;
    },
    increaseSeconds(state) {
      state.seconds = state.seconds + 1;
    },
    resetSeconds(state) {
      state.seconds = 0;
    },
  }
});

export const { setIsTimerOn, increaseSeconds, resetSeconds } = timerSlice.actions;
export default timerSlice.reducer;
