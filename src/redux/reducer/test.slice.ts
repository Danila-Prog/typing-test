import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTestSliceState } from '../../types/types';

const initialState: TTestSliceState = {
  isTestStarted: false,
  isTestFinished: false,
  sentences: '1',
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setIsTestStarted(state, action: PayloadAction<boolean>) {
      state.isTestStarted = action.payload;
    },
    setIsTestFinished(state, action: PayloadAction<boolean>) {
      state.isTestFinished = action.payload;
    },
    setSentences(state, action: PayloadAction<string>) {
      state.sentences = action.payload;
    },
    resetTestState(state) {
      state.isTestStarted = false;
      state.isTestFinished = false;
      state.sentences = '4';
    }
  }
});

export const { 
  setIsTestStarted, 
  setIsTestFinished, 
  setSentences, 
  resetTestState 
} = testSlice.actions;

export default testSlice.reducer;
