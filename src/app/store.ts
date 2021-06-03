import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice';
import CovidLinechartReducer from '../features/covid-linechart/covidLinechartSlice';


export const store = configureStore({
  reducer: {
    covid: covidReducer,
    covidlinechart: CovidLinechartReducer
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
