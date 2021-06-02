import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice';
import CovidReducer from '../features/covid-linechart/covidSlice';


export const store = configureStore({
  reducer: {
    covid: covidReducer,
    Covid: CovidReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
