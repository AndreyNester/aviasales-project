/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as checkboxFilterReducer } from './checkboxFilter/checkboxFilter.slice.js';
import { reducer as switcherReducer } from './switcher/switcher.slice';

const reducers = combineReducers({
  switcher: switcherReducer,
  checkboxFilter: checkboxFilterReducer,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
