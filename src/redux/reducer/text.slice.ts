import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import { TTextType, TTextState } from '../../types/types';
import style from '../../components/Test/Test.module.scss'

export const fetchText = createAsyncThunk<string, string, {rejectValue: string}>(
  'textSlice/fetchText', async function(sentences: string, {rejectWithValue}) {
    try {
      const response = await axios.get<string>("https://baconipsum.com/api/", {
        params: {
          type: "all-meat",
          sentences,
          format: "text",
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  }
);

const initialState: TTextState = {
  text: [],
  isLoading: false,
  error: null,
  currentCharIndex: 0,
  mistakes: 0,
  pressingCount: 0
};

const textSlice = createSlice({
  name: 'textSlice',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<TTextType[]>) {
      state.text = action.payload;
    },
    setCurrentCharIndex(state, action: PayloadAction<number>) {
      state.currentCharIndex = action.payload;
    },
    setMistakes(state, action: PayloadAction<number>) {
      state.mistakes = action.payload;
    },
    increasePressingCount(state) {
      state.pressingCount = state.pressingCount + 1;
    },
    resetTextState(state) {
      state.currentCharIndex = 0;
      state.mistakes = 0;
      state.pressingCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchText.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchText.fulfilled, (state, action) => {
        state.text = action.payload.split('').map((item, index) => {
          return index === 0 
            ? {char: item, class: `${style.currentChar}`} 
            : {char: item, class: ''} 
        });
        state.isLoading = false;
      })
      .addCase(fetchText.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { 
  setText, 
  setCurrentCharIndex,  
  setMistakes, 
  increasePressingCount,
  resetTextState
} = textSlice.actions;

export default textSlice.reducer;
